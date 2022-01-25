const mockData = {
  id: 6,
  first_name: "Paul",
  last_name: "Atreides",
  email: "muadib@dune.com",
  country: "US"
}

async function getUser(value) {
  console.log("Knex?: ", value.knex);
  return mockData;
}

module.exports = { getUser };
