var express = require("express")
var mysql      = require('mysql');
var cors = require("cors")
var app = express()


app.use(cors());
app.use(express.json());


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


app.get("/sq",(req,res)=>{

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
    console.log('sssssssss', req.body);
    let sql = 'insert into user_message(name, email, message) values(?,?,?)';
    connection.query(sql,[data.name, data.email, data.msg],(err,result)=>{
        if(err){
            res.send("Error")
        }
        console.log('!!!!!!!!!!', result)
        res.send({result})
    });
    

})

app.listen(3002,()=>{
    console.log("App Running");
})