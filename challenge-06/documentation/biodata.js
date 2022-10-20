const { requestHeader } = require("./utils/header");
const request = require("./utils/postmanRequest");
const authKey = require('./utils/authKey');

const header = requestHeader(authKey);

const requestTest = `
pm.test('Sample test: Test for successfull response', function(){
  pm.expect(pm.response.code).to.equal(200);
});
`;

const getBiodata = request({
  requestName: "Get Biodata",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/:userId/biodata",
  requestPayload: null,
  requestTest,
  method: "GET",
});



const createBiodata = request({
  requestName: "Create Biodata",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/:userId/biodata",
  requestPayload: {
    avatar: "avatar1",
    nickname: "nickname2",
    rank: "Mythic",
    level: 30,
  },
  requestTest,
  method: "POST",
});

const updateBiodata = request({
  requestName: "Update Biodata",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/:userId/biodata",
  requestPayload: {
    avatar: "new_avatar1",
    nickname: "new_nickname2",
    rank: "Mythical Glory",
    level: 50,
  },
  requestTest,
  method: "PUT",
});

const deleteBiodata = request({
  requestName: "Delete Biodata",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/:userId/biodata",
  requestPayload: null,
  requestTest,
  method: "DELETE",
});

module.exports = {getBiodata, createBiodata, updateBiodata, deleteBiodata};