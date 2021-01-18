var express= require('express');
var app=express();
var bodyParser =require('body-parser');
const { createConnection } = require('net');

// var connection=require('./model/database');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/login',function(req,res){
    console.log("Hi");
res.sendFile(__dirname +'/views/slogin.html');

})

app.post('/validate',function(req,res){
    var email=req.body.Email; 
    var pwd=req.body.password;

    // connection.query('select email from student_details where email like ?',[email],(err,results)=>{
    //     if (err) throw err;
    //     if(results){
    //         connection.query('select password from student_details where email like ? and password like ?)',[email,pwd],(err,results)=>{
    //             res.send('<h3>Hello everyone</h3>');
                 Connection.query('Query',[email],(err,results)=>{
                     
                 })
    //         })
    //     }
    // })

})
app.get('/signup',function(req,res){
    console.log("Hi");
res.sendFile(__dirname +'/views/signup.html');

})

app.use('/signupValidate',function(req,res){
console.log('validated');
var Uname= req.body.Uname;
var email=req.body.Email;
var rollno=req.body.rollno;
var pwd=req.body.password;

// connection.query('insert into student_details values(?,?,?,?)',[Uname,email,rollno,pwd],(err,results)=>{
//     if(err) throw err;
//     if(results){
//         console.log("Values Inserted");
//         res.sendFile(__dirname +'/views/proj_login.html');
//     }
// })

})

app.listen(1103,()=>{
    console.log("Server is listening 1103");
})

