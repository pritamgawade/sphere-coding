async function getUser(parent, args, context, info) {

  console.log(`getUser: info: ${JSON.stringify(info)}`);
}

module.exports = { getUser };
