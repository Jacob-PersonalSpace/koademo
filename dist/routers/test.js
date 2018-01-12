'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _test = require('../bll/test');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

router.get('/test', function (req, res) {
    (0, _test.test)().then(function (data) {
        return res.status(200).json(data);
    });
});

router.get('/test2', function (req, res) {
    (0, _test.test2)().then(function (data) {
        return res.status(200).json(data);
    });
});

exports.default = router;