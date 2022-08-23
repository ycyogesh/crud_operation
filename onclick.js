var express = require("express")
var mysql      = require('mysql');
var cors = require("cors")
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodejs',
  password : 'Node@123',
  database : 'crud'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
var app = express()
app.use(cors());
app.get("/sql",(req,res)=>{
    let sql = 'select * from user_message';
    connection.query(sql,(err,result)=>{
        if(err){
            res.send("Error")
        }
        res.json({result})
    });
    

})


app.post("/sql",(req,res)=>{
    let data = req.body
    let sql = 'insert into table userMessage(name, email, message) values(?,?,?)';
    connection.query(sql,[data.name, data.email, data.message],(err,result)=>{
        if(err){
            res.send("Error")
        }
        res.json({result})
    });
    

})

app.listen(3002,()=>{
    console.log("App Running");
})