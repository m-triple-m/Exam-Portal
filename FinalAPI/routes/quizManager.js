const usermodel=require('../models/quizModel');
const express = require('express');
const router = express.Router();


router.post('/add',(req,res)=> {
    let data=req.body;
    console.log(data)

    let model =new usermodel(data);

    model.save()
    .then(data =>{
        console.log('data successfully saved');
        res.status(200).json({message : "success"}); 
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json(err);
    })
    

})
router.get('/getbyid/:id', (req, res) => {
    
    usermodel.findById(req.params.id)
    .then(data => {
        console.log('data fetched !');
        res.status(200).json(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})

router.get('/getbyuser/:id', (req, res) => {
    
    usermodel.find({user : req.params.id})
    .then(data => {
        console.log('data fetched !');
        res.status(200).json(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})



router.put('/update/:id', (req,res) => {
    let id=req.params.id;
    let datatoupdate =req.body;
    usermodel.findByIdAndUpdate(id, datatoupdate)
    .then(data =>{
        console.log('data successfully fetched');
        res.status(200).json(data);
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json(err);
    })
})

router.delete('/delete/:id', (req,res) => {
    let id=req.params.id;
   
    usermodel.findByIdAndDelete(id)
    .then(data =>{
        console.log('data successfully deleted');
        res.status(200).json(data);
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json(err);
    })
})

module.exports=router;