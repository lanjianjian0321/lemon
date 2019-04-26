var express = require('express');
var router = express.Router();

let { findBill, addBill, removeBill } = require("./index_api")
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


//删除接口
router.get("/removeBill", removeBill);
//添加接口
router.post("/addBill", addBill);

//查找接口
router.post("/findBill", findBill);

module.exports = router;