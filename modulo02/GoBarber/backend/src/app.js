import express from 'express';
import routes from './routes';

// Criando a classe App
class App {
  constructor() {
    // This se refera á classe
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// Instanciondo o Objeto App
export default new App().server;
