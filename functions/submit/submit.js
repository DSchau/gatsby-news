exports.handler = async event => {
  const params = qs.parse(event.body)
  return {
    status: 200,
    body: JSON.stringify(params)
  }
}
