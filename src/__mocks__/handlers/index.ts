import { rest } from 'msw';
import auth from './auth';

export const handlers = [rest.post('/api/signin', auth)];
