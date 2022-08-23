var express = require("express")
var mysql      = require('mysql');
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

app.get("/sql",(req,res)=>{
    let sql = 'select * from user_message';
    connection.query(sql,(err,result)=>{
        if(err){
            res.send("Error")
        }
        res.json({result})
    });
    

})


app.listen(3000,()=>{
    console.log("App Running");
})