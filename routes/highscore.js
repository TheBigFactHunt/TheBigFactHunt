const express = require('express');
const highScores = require('../models/highscore');
const router = express.Router();

router.post('/', async (req,res) => {
    new highScores(req.body).save((err, score) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Error', err })
        } else {
            res.status(200).json({ status: 'Success!', score });
        }
    })
})

router.get('/', (request, response) => {
    
    highScores.find({}).sort({user_score: 'descending'}).limit(10).exec((err, scores) => { 
        if (err) {
            console.log(err);
            response.status(500).json({status: 'Error', err })
        } else {
            response.status(200).json({ status: 'Success yes!', scores });
        }
    })
})
module.exports = router;