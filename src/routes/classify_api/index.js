let Mongo = require("mongodb-curd");

module.exports = {

    //查询自定义分类图标业务逻辑
    getCustom(req, res) {
        Mongo.find("lemon", "custom", {}, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 0, msg: "success", data: rs })
            }
        })
    },
    //查询类型业务逻辑
    getClassify(req, res) {
        let { type, userId } = req.body;
        if (!type || !userId) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        Mongo.find("lemon", "classify", { "type": type, "userId": { $in: ["*", userId] } }, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success", data: rs })
            }
        })
    },
    //添加类型业务逻辑
    addClassify(req, res) {
        let { type, userId, icon, name } = req.body;
        if (!type || !userId || !icon || !name) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        Mongo.insert("lemon", "classify", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success", data: rs })
            }
        })
    }
}