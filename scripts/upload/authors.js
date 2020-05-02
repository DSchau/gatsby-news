const slugify = require('limax')

exports.mutation = `
mutation createUser($first_name: String!, $last_name: String!, $username: String!, $email: String!, $description: String!, $roles: [String], $password: String!) {
    createUser(input: {
        firstName: $first_name,
        lastName: $last_name,
        username: $username,
        email: $email,
        description: $description,
        roles: $roles,
        password: $password,
        clientMutationId: "local-node-script"
    }) {
     user {
        id
    }
    }
}
`

exports.normalize = (arr) =>
  arr.map((item) => {
    if (item.first_name) {
      return item
    }
    const slug = slugify(item.name)
    const [first_name, last_name] = item.name.split(' ')
    return {
      first_name,
      last_name,
      slug,
      username: slug,
      email: `${first_name.toLowerCase()}@gatsbyjs.com`,
      description: item.bio,
      roles: ['edit'],
      password: process.env.PASSWORD,
    }
  })
