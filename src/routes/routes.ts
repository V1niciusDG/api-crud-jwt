import { Router, Request, Response } from 'express';

const routes = Router();

routes.post('/', (req: Request, res: Response) => {
  res.send('funcionando');
});

export default routes;
