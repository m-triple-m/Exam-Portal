const Model = require('../models/answerModel');
const router = require('express').Router();


router.post('/add', (req, res) => {
    let model = new Model(req.body);
    model.save()
    .then(data => {
        console.log('data successfully saved!');
        res.status(200).json({message : 'success'});
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})

router.get('/getbyid/:id', (req, res) => {
    
    Model.findById(req.params.id)
    .then(data => {
        console.log('data fetched !');
        res.status(200).json(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})

router.get('/getbypaper/:id', (req, res) => {
    
    Model.find({paper : req.params.id})
    .then(data => {
        console.log('data fetched !');
        res.status(200).json(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})

router.get('/getall', (req, res) => {
    
    Model.find({})
    .then(data => {
        console.log('data fetched !');
        res.status(200).json(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    })
})

module.exports = router;