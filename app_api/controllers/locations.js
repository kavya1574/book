var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
  };
  module.exports.booksCreate = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
  };
  module.exports.booksList = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
  };
  module.exports.booksReadOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
  };
  module.exports.booksUpdateOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
  };
  module.exports.booksDeleteOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
  };