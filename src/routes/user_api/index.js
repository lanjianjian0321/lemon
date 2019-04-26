let Mongo = require("mongodb-curd")

module.exports = {
    getUser(req, res) {
        Mongo.find("lemon", "user", {}, (re) => {
            if (!re) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success", data: re })
            }
        }, {
            limit: 1
        })
    }

}