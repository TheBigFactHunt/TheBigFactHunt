const mongoose = require('mongoose');


const highScoreSchema = mongoose.Schema(
    {
        user_score: {
            type: Number,
            required: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        first_name: {
            type: String,
            required: true,
            trim: true
        },
    }
);
const highScores = mongoose.model('HighScores', highScoreSchema);

module.exports = highScores;