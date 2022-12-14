import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { db, initDB } from './db';

initDB();

console.log(db.account.getAll());

export const worker = setupWorker(...handlers);
