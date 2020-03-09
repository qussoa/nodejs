var mongoose = require("mongoose")
var bookVO = mongoose.Schema({
    bTitle : String,
    bWriter : String,
    bComp : String,
    bPrice : Number
})

// 실제는 tbl_books 
module.exports = mongoose.model("tbl_book",bookVO)