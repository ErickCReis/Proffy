import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css'
import api from '../../service/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    searchTeachers();
  }, [])

  function clearFilters(event: FormEvent) {
    setSubject('');
    setWeekDay('');
    setTime('');
  }

  async function searchTeachers(event: FormEvent | null = null) {
    if (event) event.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esse são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>

          <Select 
            name="subject" 
            label="Matéria"
            value={subject} 
            onChange={(event) => { setSubject(event.target.value)}} 
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day} 
            onChange={(event) => { setWeekDay(event.target.value)}} 
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quita-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input 
            type="time" 
            name="time" 
            label="Hora" 
            value={time} 
            onChange={(event) => { setTime(event.target.value)}} 
          />

          <button type="submit" className="search-button"> Buscar </button>
          <button 
            type="submit" 
            onClick={(event) => clearFilters(event)}
            className="clear-button"
          > 
            Limpar 
          </button>

        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}

export default TeacherList;