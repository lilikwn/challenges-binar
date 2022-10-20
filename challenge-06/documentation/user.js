const { requestHeader } = require("./utils/header");
const request = require("./utils/postmanRequest");
const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhbHVlMSIsImxvZ2luRGF0ZSI6IjIwMjItMTAtMDdUMDQ6MTE6MTcuMjE3WiIsImlhdCI6MTY2NTExNTg3N30.U9_FYT8jMUwEreZrtIbMIX6cst_ZET7QKKd0Amn5iM0'

const header = requestHeader(auth);

const requestTest = `
pm.test('Sample test: Test for successfull response', function(){
  pm.expect(pm.response.code).to.equal(200);
});
`

const getUsers = request({
  requestName: "Get Userdata",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/users/",
  requestPayload: null,
  requestTest,
  method: "GET",
});

const getUser = request({
  requestName: "Get Userdata",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/users/:userId",
  requestPayload: null,
  requestTest,
  method: "GET",
});

const createUser = request({
  requestName: "Create Userdata",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/users/",
  requestPayload: {
    username: "username_1",
    password: "password_1",
  },
  requestTest,
  method: "POST",
});

const updateUser = request({
  requestName: "Update Userdata",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/users/:userId",
  requestPayload: {
    username: "username_updated",
    password: "password_updated",
  },
  requestTest,
  method: "PUT",
});

const deleteUser = request({
  requestName: "Delete Userdata",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/users/:userId",
  requestPayload: null,
  requestTest,
  method: "DELETE",
});

module.exports = {getUser, getUsers, createUser, updateUser, deleteUser};