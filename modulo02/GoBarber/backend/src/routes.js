import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Jean Oliveira',
    email: 'jean@joyjet.com',
    password_hash: '32541010',
  });
  return res.json(user);
});

export default routes;
