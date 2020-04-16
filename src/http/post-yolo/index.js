const arc = require('@architect/functions')

exports.handler = async function http (req) {
  const name = 'yolo'
  const payload = { body: req.body }
  await arc.events.publish({ name, payload })
  return {
    headers: { 'Location': '/' },
    statusCode: 302
  }
}
