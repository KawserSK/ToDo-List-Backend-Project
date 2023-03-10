
const todoListModel = require("../model/todoListModel");

exports.createTodo=(req, res)=>{
    let reqBody=req.body;


    let TodoSubject=reqBody['TodoSubject']
    let TodoDescription=reqBody['TodoDescription']
    let UserName=req.headers['username']
    let TodoStatus="New"
    let TodoCreateDate=Date.now();
    let TodoUpdateDate=Date.now();

    let PostBody={
        UserName:UserName,
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoStatus:TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate:TodoUpdateDate
    }


    todoListModel.create(PostBody,(err, data)=>{
        if(err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Success", data:data})
        }
    })

}

exports.selectTodo=(req, res)=>{
    
    let UserName = req.headers['userName']

    todoListModel.find({UserName:UserName}, (err,data)=>{
        if(err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
       
    })

}



