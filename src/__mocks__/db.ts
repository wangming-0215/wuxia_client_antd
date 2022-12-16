import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

export const db = factory({
  account: {
    id: primaryKey(faker.datatype.uuid),
    username: () => generateUsername(),
    password: String,
    role: () => generateGameRole(),
  },
});

const PASSWORD = 'wM@123456';

export function initDB() {
  db.account.create({
    id: 'ec5a84e2-54b0-4823-b214-43aa7105428d',
    username: 'wang_xiao_ming',
    password: PASSWORD,
    role: '神威',
  });
}

/**
 * 生成用户名
 * @returns
 */
function generateUsername() {
  return faker.name.fullName().split(' ').join('_').toLowerCase();
}

function generateGameRole() {
  return faker.helpers.arrayElement([
    '神威',
    '太白',
    '真武',
    '移花',
    '丐帮',
    '天香',
    '从龙',
    '神刀',
  ]);
}
