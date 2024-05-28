import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes/routes';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  const port = process.env.PORT || 3005;

  return app.listen(port, () => {
    console.log('Server rodando na porta 3005');
  });
});
