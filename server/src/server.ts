import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import routes from './routes';

interface Error {
  status?: number;
  message?: string;
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Not found
app.use((request: Request, response: Response, next: NextFunction) => {
  const error: Error = {};
  error.status = 404;
  error.message = "Not found";
  next(error);
})

// Catch errors
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  response.status(error.status || 500);
  response.json({error: error.message});
})

app.listen(process.env.PORT || 3333);