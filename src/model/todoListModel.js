const mongoose = require('mongoose')
const dataSchema=mongoose.Schema({

    UserName:{type:String},
    TodoSubject:{type:String},
    TodoDescription:{type:String},
    TodoStatus:{type:String},
    TodoCreateDate:{type:Date},
    TodoUpdateDate:{type:Date},

}, {versionKey:false});
const todoListModel=mongoose.model('list', dataSchema);
module.exports=todoListModel