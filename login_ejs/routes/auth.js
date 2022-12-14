const router = require("express").Router();
const passport = require("passport")


const CLIENT_URL="http://localhost:3000/ForgotPassword"

router.get("/login/sucess",(req,res)=>{
    if(req.user){
        res.status(200).json({
        success:true,
        message:"sucessful",
        user:req.user,
     // cookies:req.cookies
    })
    }
})
router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect(CLIENT_URL)
})

router.get("/login/failed",(req,res)=>{
    res.status(401).json({
        success:false,
        message:"failure",
    })
})


router.get("/google", passport.authenticate("google", { scope: ["profile"] },(req,res)=>{
    res.json(scope)
}));
router.get("/google/callback",passport.authenticate("google",{
    successRedirect:CLIENT_URL,
    failureRedirect:"/login/failed"

}))


module.exports = router;