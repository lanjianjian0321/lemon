var express = require('express');
var router = express.Router();
let { getCustom, getClassify, addClassify } = require("./classify_api")
    /* GET home page. */
    // router.get('/', function(req, res, next) {
    //     res.render('index', { title: 'Express' });
    // });

//查询自定义分类图标
router.get("/getCustom", getCustom);
//查询分类
router.post("/getClassify", getClassify);
//添加自定义分类
router.post("/addClassify", addClassify);

module.exports = router;