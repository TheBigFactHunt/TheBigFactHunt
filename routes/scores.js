const express = require('express');
const Scores = require('../models/scores');
const router = express.Router();

router.post('/', async (req,res) => {
    new Scores(req.body).save((err, score) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Error', err })
        } else {
            res.status(200).json({ status: 'Success!', score });
        }
    })
})

router.get('/', (request, response) => {
    
    Scores.find({}).sort({date: 'descending'}).limit(5).exec((err, scores) => { 
        if (err) {
            console.log(err);
            response.status(500).json({status: 'Error', err })
        } else {
            response.status(200).json({ status: 'Success!', scores });
        }
    })
})
module.exports = router;