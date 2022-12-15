import { rest } from 'msw';
import { createLoginResolver, createProfileResolver } from './auth';

export const handlers = [
  rest.post('/api/login', createLoginResolver()),
  rest.get('/api/profile', createProfileResolver()),
];
