let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let cipher = require("../model/cipher");


router.get('/', async(req, res, next) => {
    try{
        const Cipher = await cipher.find()
        res.render("Cipher/list", {title: "Actor List", cipherList: Cipher});
    }
    catch (err)
    {
        console.error(err);
        res.render("Cipher/list",{
            error:"Error on Server"})
    }
});

router.get("/add",async(req,res,next)=>{
    try {
        res.render("Cipher/add",{
            title: "Add a cipher"
        });
    } 
    catch (err) {
        console.error(err)
        res.render("Cipher/list",{
            error:"Error on Server"})
    }
});

router.post("/add", async(req,res,next)=>{
    try {
        let newCipher = cipher({
            "firstname":req.body.firstname,
            "lastname":req.body.lastname,
            "plaintext":req.body.plaintext,
            "key":req.body.key,
            "encryption":req.body.encryption
        })
        cipher.create(newCipher).then(()=>{
            res.redirect("/cipher")
        }
    )}
    
    catch (err) {
        console.error(err)
        res.render("Cipher/list",{
            error:"Error on Server"})
    }
});


  module.exports = router;