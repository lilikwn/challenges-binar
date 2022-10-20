const {Header} = require('postman-collection');

module.exports = {
  requestHeader : (auth = '') => {
    
    const requestHeader = [
      {
        key: 'Authorization',
        value: auth
      },
      {
        key: "Content-Type",
        value: "application/json"
      },
      {
        key: "cache-control",
        value: "no-cache"
      }
    ];
    return requestHeader;
  }
}