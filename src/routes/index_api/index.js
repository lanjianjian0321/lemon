let Mongo = require("mongodb-curd");

module.exports = {

    //删除账单
    removeBill(req, res) {
        let { _id } = req.query;
        if (!_id) {
            return res.send({ code: 2, msg: "参数不完整" })
        }

        Mongo.remove("lemon", "bill", req.query, (rs) => {
            if (!re) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success" })
            }

        })

    },

    //添加账单
    addBill(req, res) {
        let { icon, Time, name, money, type, userId } = req.body;
        if (!icon || !Time || !name || !money || !type || !userId) {
            return res.send({
                code: 2,
                msg: "参数不完整"
            })
        }
        Mongo.insert("lemon", "bill", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success" })
            }
        })

    },

    //查找账单
    findBill(req, res) {
        let { Time, name, type } = req.body;
        if (!Time) {
            return res.send({
                code: 2,
                msg: "参数不完整"
            })
        }
        let query = { Time: new RegExp(Time) };
        if (type) {
            query.type = type;
        }
        if (name) {
            query.name = { $in: name.split(",") }
        }
        Mongo.insert("lemon", "bill", query, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success" })
            }
        })

    }
}