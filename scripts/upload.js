const fs = require('fs-extra')
const { request, GraphQLClient } = require('graphql-request')
const path = require('path')
const slugify = require('limax')

async function upload({ type = 'posts' } = {}) {
    const filePath = path.join(__dirname, '..', 'data', `${type}.json`)
    const data = require(filePath)

    if (type === 'authors') {
        const normalized = data.map(item => {
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
                password: `ZuEYhfHPzJ7XBQLFpAkPioJN`
            }
        })

        await fs.writeFile(filePath, JSON.stringify(normalized, null, 2))

        for (let user of normalized.slice(1)) {
            const mutation = `
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
            const client = new GraphQLClient(`http://44.233.251.53/graphql`, {
                headers: {
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC80NC4yMzMuMjUxLjUzIiwiaWF0IjoxNTg2NTYyNzA0LCJuYmYiOjE1ODY1NjI3MDQsImV4cCI6MTU4NjU2MzAwNCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMiJ9fX0.DfUzVbDLIIoIybyy9MxSzKZbCZJIbPSBYkpYT_dGQWg`
                }
            })
            const data = await client.request(mutation, user)
                .catch(e => {
                    console.warn(e)
                })

            console.log(data)
        }
    }
}

upload()
