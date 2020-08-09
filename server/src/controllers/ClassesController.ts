import { Request, Response, NextFunction} from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';
interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
}

export default class ClassesController {
  async index (request: Request, response: Response, next: NextFunction) {
    const filters = request.query 
    
    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;
    
    //const page = filters.page as unknown as number || 1;
    //const allClasses = db('classes')
      // .limit(5)
      // .offset((page - 1) * 5);

    try {
      const query = db('classes')

      if (subject) {
        query
          .where('classes.subject', '=', subject)
      }
      
      if (week_day) {
        query
        .whereExists(function() {
          this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
        })
      }
      
      if (time) {
        const timeInMinutes = convertHourToMinutes(time);

        query
        .whereExists(function() {
          this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
            .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
        })
      }

      query
        .join('users', 'classes.user_id', '=', 'users.id');

      
      const allClasses = await query;
      const count = allClasses.length.toString(); 
      response.header('X-Total-Count', count);
      
      return response.json(allClasses);

    } catch (error) {
      next(error);
    }
  }

  async create (request: Request, response: Response, next: NextFunction) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost, 
      schedule
    } = request.body;
  
    const trx = await db.transaction();
  
    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      })
    
      const user_id = insertedUsersIds[0];
    
      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      })
    
      const class_id = insertedClassesIds[0];
    
      const class_schedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        }
      })
    
      await trx('class_schedule').insert(class_schedule);
    
      await trx.commit();
    
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
      next(err);
    }
  }
}