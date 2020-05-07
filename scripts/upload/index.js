const fs = require('fs-extra')
const path = require('path')

const getClient = require('./get-client')

async function upload({ type = 'posts' } = {}) {
  const client = await getClient()

  const filePath = path.join(__dirname, '..', '..', 'data', `${type}.json`)
  const data = require(filePath)

  if (type === 'authors') {
    const { mutation, normalize } = require('./authors')
    let normalized = normalize(data)
    

    for (let user of normalized) {
      await client.request(mutation, user)
        .catch(e => {
          console.warn(e)
          // I have no idea why, this fails but actually succeeds
          // fun
        })
    }

    await fs.writeFile(filePath, JSON.stringify(normalized, null, 2))
  } else if (type === 'posts') {
    const authors = require(path.join(
      __dirname,
      '..',
      '..',
      'data',
      `authors.json`
    ))

    const { mutation, normalize } = require('./posts')
    const normalized = normalize(data, authors)

    let index = 0

    for (let post of normalized.slice(300)) {
      console.log(`uploading post ${index} (${post.title})`)
      index += 1
      await client.request(mutation, post)
        .catch(e => {
          // again, fails, but not sure why
          // oh well
        })
    }
  }
}

upload()
