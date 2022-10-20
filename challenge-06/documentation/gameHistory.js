const { requestHeader } = require("./utils/header");
const request = require("./utils/postmanRequest");

const header = requestHeader();

const requestTest = `
pm.test('Sample test: Test for successfull response', function(){
  pm.expect(pm.response.code).to.equal(200);
});
`
const getHistory = request({
  requestName: "Get Game History",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/:userId/history",
  requestPayload: null,
  requestTest,
  method: "GET",
});

const createHistory = request({
  requestName: "Create Game History",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/:userId/history",
  requestPayload: {
    score: 10,
    is_win: true,
    match_type: "Rank",
    duration: 600,
  },
  requestTest,
  method: "POST",
});

const updateHistory = request({
  requestName: "Update Game History",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/:userId/history/:historyId",
  requestPayload: {
    score: 0,
    is_win: false,
    match_type: "Classic",
    duration: 1200,
  },
  requestTest,
  method: "PUT",
});

const deleteHistory = request({
  requestName: "Delete Game History",
  requestHeader: header,
  apiEndpoint: "http://localhost:3000/:userId/history/:historyId",
  requestPayload: null,
  requestTest,
  method: "DELETE",
});

module.exports = {getHistory, createHistory, updateHistory, deleteHistory};