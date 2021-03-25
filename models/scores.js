const mongoose = require('mongoose');
const User = require('../models/user');

const scoreSchema = mongoose.Schema(
    {
        user_score: {
            type: Number,
            required: true,
        },
        user_highscore: {
            type: Number,
            required: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }
);
const Scores = mongoose.model('Scores', scoreSchema);

module.exports = Scores;
