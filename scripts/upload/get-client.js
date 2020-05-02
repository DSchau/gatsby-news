const { GraphQLClient } = require('graphql-request')

const getClient = async () => {
  const tempClient = new GraphQLClient(`http://44.233.251.53/graphql`)

  const data = await tempClient.request(`
  mutation LoginUser($username: String!, $password: String!) {
    login(input: {clientMutationId: "uniqueId", username: $username, password: $password}) {
      authToken
      user {
        id
        name
      }
    }
  }
  
  `, {
    "username": process.env.USER,
    "password": process.env.PASSWORD
})

  return new GraphQLClient(`http://44.233.251.53/graphql`, {
    headers: {
      authorization: `Bearer ${data.login.authToken}`
    }
  })
}

module.exports = getClient
