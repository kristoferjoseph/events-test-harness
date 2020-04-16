const queryString = require('querystring')
const arc = require('@architect/functions')

exports.handler = arc.events.subscribe(
  async function subscribe (event) {
    let data = new Buffer.from(event.body, 'base64').toString()
    console.log(JSON.stringify(queryString.parse(data), null, 2))
  }
)
