import Express from 'express';

class App {
  app: ReturnType<typeof Express>;

  constructor() {
    this.app = Express();
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
