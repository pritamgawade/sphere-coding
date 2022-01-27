async function getUsers(context) {
  const { knex } = context;

  return await knex('testusers');
}

async function getUser(args, context) {
  const { id, email } = args;
  const { knex } = context;

  const payload = /@/.test(email) ? { email } : { id: +id };

  const userRecord = await knex('testusers').where(payload);

  return userRecord[0];
}

async function updateUser(args, context) {
  const { id, email, first_name, last_name, country } = args;
  const { knex } = context;
  const whereCondition = { id: id };

  const userData = await knex('testusers').where(whereCondition);
  const user = userData[0];
  
  if (!user) {
    throw new Error(`Couldn’t find author with id ${id}`);
  }
  if (first_name !== undefined) {
    user.first_name = first_name;
  }
  if (last_name !== undefined) {
    user.last_name = last_name;
  }
  if (country !== undefined) {
    user.country = country;
  }
  if (email !== undefined) {
    user.email = email;
  }

  await knex('testusers').update(user).where(whereCondition);

  return user;
}

module.exports = { getUser, getUsers, updateUser };
