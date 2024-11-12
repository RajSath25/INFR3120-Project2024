var express =require('express');
var router = express.Router();
let mongoose = require('mongoose');
//telling the router i have this model
let cipher = require('../model/cipher');
const Cipher = require('../model/cipher');
let cipherController = require('../controllers/cipher.js');
/* GET home page. */
/* het route for the cipher list page - read operation */
/*get,post,put,--edit/update./delete*/
//let cipher = require('../model/cipher');
/* GET home page. 

read operation --?Get route for displaying the books list*/
router.get('/',async(req,res,next)=>{
  try{
    const CipherList = await cipher.find();
    res.render('cipher/list',{
      title: 'ciphers',
      cipherList: cipherList
    })}
    catch(err){
      console.log(err);
      res.render('Cipher/list',{
           error:'Error on the server'
      })
    }
    });
/*create opetation --get route for t0 the add page*/
router.get('/add', (req,res,next)=>{
    try{
      res.render('cipher/add',{
        title: 'Add a cipher'
        })
    }
    catch(err)
        {
            console.log(err);
            res.render('cipher/list',{
                error:'Error on the server'
            })
        }
        });

    /*create operation --post route for processing the add page*/
    router.post('/add',async(req,res,next)=>{
        try{
            const newCipher = cipher({
                "firstname": req.body.firstname,
                "lastname": req.body.lastname,
                "plaintext": req.body.plaintext,
                "encryption": req.body.encryption,
                "key": req.body.key
            });

            Cipher.create(newCipher).then(()=>{
                res.redirect('/cipher');
            })
        }
        catch(err)
        {
            console.log(err);
            res.render('cipher/list',{
                error:'Error on the server'
            })
        }
        });
        /*update operation to get route for siplaying the edit page*/
        router.get('/edit/:id',async(req,res,next)=>{
            try{
                let id = req.params.id;
                const cipher = await cipher.findById(id);
                res.render('cipher/edit',{
                    title: 'Edit a cipher',
                    cipher: cipherToEdit
                }
            )
        }
        catch(err){
            console.log(err);
            next(err); //passing the error
        }
    });
/* update operation -> post route for processing the edit page*/
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        let updatedCipher = cipher({
            "_id": id,
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "plaintext": req.body.plaintext,
            "encryption": req.body.encryption,
            "key": req.body.key
        });
        Cipher.findByIdAndUpdate(id,updatedCipher).then(()=>{
            res.redirect('/cipher')
        })
    }
    catch(err){
        console.log(err);
        res.render('cipher/list',{ 
            error:'Error on the server'
        })
    }
});
/* delete operation get route to perform delete operation*/
router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        Cipher.deleteOne({__id:id}).then(()=>{
            res.redirect('/cipher');
        }
    )
    }
    catch(err){
        console.log(err);
        res.render('cipher/list',{
            error:'Error on the server'
        })
    }
});
module.exports = router;


