var express = require('express');
var cors = require('cors');
var mongoclient = require('mongodb').MongoClient;


var connectionstring = "mongodb://127.0.0.1:27017";


var app = express();
app.use(cors())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.get("/getuser", (req, res) => {
    mongoclient.connect(connectionstring, (err, clientobj) => {
        if(!err){
            var database = clientobj.db('reactdb');
            database.collection('user').find({}).toArray((err, document) => {
                if(!err){
                    res.send(document)
                }

            })
        }
    })
})
app.post("registeruser",(req,res)=>{
    
                userdetails = {
                    id : req.body.id,
                    userName:req.body.userName,
                    password:req.body.password,
                }
                mongoclient.connect(connectionstring,(err,clientobj)=>{
                    if(!err){
                        var database = clientobj.db("reactdb");
                        database.collection("user").insertOne(userdetails,(err,result)=>{
                            if(!err){
                                
                            }
                        }
                
                        )}})})
    
app.listen(4000, ()=>{
    console.log("listing port:4000")
});
