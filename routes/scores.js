const express = require('express');
const Scores = require('../models/scores');
const User = require('../models/user');
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
module.exports = router;