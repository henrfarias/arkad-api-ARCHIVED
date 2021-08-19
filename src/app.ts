import Express from 'express';
import './db/db';

class App {
  app: ReturnType<typeof Express>;

  constructor() {
    this.app = Express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(Express.urlencoded({ extended: true }));
    this.app.use(Express.json());
  }

  routes() {
    this.app.get('/', (_req, res) => res.json({ working: true }));
  }
}

export default new App().app;
