const yup = require('yup')

const schema = yup.object().shape({
  title: yup.string().required(),
  excerpt: yup.string(),
  content: yup.string().required(),
  author: yup.string().required(),
  categories: yup.array().of(yup.string()),
  tags: yup.array().of(yup.string())
})

exports.handler = async event => {
  let body
  try {
    body = await schema.validate(JSON.parse(event.body))
  } catch (e) {
    return {
      status: 500,
      body: JSON.stringify({
        message: e.message,
        stack: e.stack
      })
    }
  }

  return {
    status: 200,
    body: JSON.stringify(body)
  }
}
