const mongoose = require('mongoose');
const User = require('../models/user');

const scoreSchema = mongoose.Schema(
    {
        user_score: {
            type: Number,
            required: true,
        },
        // user_highscore: {    -- commented out for now
        //     type: Number,
        //     required: true,
        // },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        date:{
            type: Date, 
            required: true
        },
        first_name: {
            type: String,
            required: true,
            trim: true
        },
    }
);
const Scores = mongoose.model('Scores', scoreSchema);

module.exports = Scores;
