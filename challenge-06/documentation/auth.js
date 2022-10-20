const { requestHeader } = require("./utils/header");
const request = require("./utils/postmanRequest");

const header = requestHeader();

const requestTest = `
pm.test('Sample test: Test for successfull response', function(){
  pm.expect(pm.response.code).to.equal(200);
});
`;

const registerRequest = request({
  requestName: "register",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/auth/register",
  requestPayload: {
    username: "value1",
    password: "value2",
  },
  requestTest,
  method: "POST",
});

const loginRequest = request({
  requestName: "login",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/auth/login",
  requestPayload: {
    username: "value1",
    password: "value2",
  },
  requestTest,
  method: "POST",
});

module.exports = {registerRequest, loginRequest};
