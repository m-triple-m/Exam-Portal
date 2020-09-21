const usermodel=require('../models/userModel');
const express = require('express');
const Router = express.Router();


Router.post('/add',(req,res)=> {
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
Router.get('/getalluser',(req,res)=>{
    usermodel.find({})
    .then(data =>{
        console.log('data successfully fetched');
        res.status(200).json(data);
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json(err);
    })
})

Router.get('/getuserbyid/:id',(req,res)=>{
    let userid=req.params.id;
    usermodel.findById(userid)
    .then(data =>{
        console.log('data successfully fatched');
        res.status(200).json(data);
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json(err);
    })
})

Router.get('/getuserbyemail/:email',(req,res)=>{
    let useremail=req.params.email;
    usermodel.find({email: useremail})
    .then(data =>{
        console.log('data successfully fatched');
        res.status(200).json(data);
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json(err);
    })
})

Router.get('/getbyusername/:username',(req,res)=>{
    let usernm=req.params.username;
    usermodel.findOne({username: usernm})
    .then(data =>{
        console.log('data successfully fetched');
        res.status(200).json(data);
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json(err);
    })
})

Router.put('/update/:id', (req,res) => {
    let id=req.params.id;
    let datatoupdate =req.body;
    usermodel.findByIdAndUpdate(id, datatoupdate)
    .then(data =>{
        console.log('data successfully fatched');
        res.status(200).json(data);
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json(err);
    })
})

Router.delete('/delete/:id', (req,res) => {
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

module.exports=Router;