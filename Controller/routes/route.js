var express= require('express');
var connection=require('../../model/database.js');
const router=express.Router()
router.get('/login',function(req,res){
    console.log("WELCOME!!");
    res.render("slogin");
})
router.post('/validate',function(req,res){
    var email=req.body.Email; 
    var pwd=req.body.password;
  

     connection.query('select email from student_details where email like ?',[email],(err,results)=>{
       if (err) throw err;
          if(results){
            connection.query('select password from student_details where email like ? and password like ?)',[email,pwd],(_err,data)=>{
             // res.send('<h3>Hello everyone</h3>');
             
                     connection.query('select student_marksheet.*,student_details.email from student_marksheet join student_details on student_marksheet.rollno= student_details.rollno where email like ? and password like?',[email,pwd],(_err,data)=>{
                     // console.log(data);
                      res.render("user-list", {userData: data });
                  })
             })
        }
        else{
            res.render("slogin");
        }
    })

})
router.get('/signup',function(req,res){
    console.log("Hi");
res.render("signup");

})

router.use('/signupValidate',function(req,res){
console.log('validated');
var Uname= req.body.Uname;
var email=req.body.Email;
var rollno=req.body.rollno;
var pwd=req.body.password;

console.log(Uname);
console.log(pwd);
connection.query('insert into student_details values(?,?,?,?)',[Uname,email,rollno,pwd],(err,results)=>{
     if(err) throw err;
     if(results){
        console.log("Values Inserted");
        //res.sendFile(__dirname +'/views/proj_login.html');
        res.render("slogin");
    }
 })

})

module.exports=router;