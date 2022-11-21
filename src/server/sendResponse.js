const sendResponse = (res, statusCode, data) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = statusCode;

  res.end(JSON.stringify(data));
};

module.exports = { sendResponse };