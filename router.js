var express= require("express");
var router = express.Router();

const credential ={
    email:"raliyasulfi@gmail.com",
    password:"12345"
}

//login user
router.post('/login',(req,res)=>{
    if(req.body.email== credential.email && req.body.password == credential.password){
      req.session.user = req.body.email;
      res.redirect('/route/dashboard');
     // res.end("Login Succesfull..")

    }else{
        res.render('base',{title : "Express",logout : "Invalid login"})
    }
});

//route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
        
    }
    else{

        res.send("Unuthorized user")
      
    }
   

})
//route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
        console.log(err);
        res.end("Error")
        }else{
            res.render('base',{title : "Express",logout : "logout Succesfully...!"})
        }
    })
})


module.exports = router;

