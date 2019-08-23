import express from 'express';
import path from 'path';
import routes from './routes';
import './database';

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
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

// Instanciondo o Objeto App
export default new App().server;
