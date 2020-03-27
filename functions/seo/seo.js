const qs = require('querystring')

/*
 * TODO: Render an SEO graphic
 * Cloudinary? Maybe.
 */
module.exports = async event => {
  const params = qs.parse(event.body)
  return {
    status: 200,
    body: JSON.stringify(params)
  }
}
