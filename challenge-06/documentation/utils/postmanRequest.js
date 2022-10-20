const {Item} = require('postman-collection');

// make params as a object
const postmanRequest = ({requestName, requestHeader, apiEndpoint, requestPayload, requestTest, method}) => {
  const request = new Item({
    name: requestName,
    request: {
      header: requestHeader,
      url: apiEndpoint,
      method: method,
      body: {
        mode: 'raw',
        raw: JSON.stringify(requestPayload),
        options: {
          raw: {
            language: 'json'
          }
        } 
      },
      auth: null
    },
    events:[
      {
        listen: 'test',
        script: {
          type: 'text/javascript',
          exec: requestTest
        }
      }
    ]
  })
  return request
}

module.exports = postmanRequest;