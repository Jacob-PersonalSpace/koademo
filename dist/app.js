'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _test = require('./routers/test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.use('/api', _test2.default);

var server = app.listen(9009, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('http://localhost:' + port);
});