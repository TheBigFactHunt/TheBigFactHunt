const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true
        },
        last_name: {
            type: String,
            required: true,
            trim: true
        },
        user_email: {
            type: String,
            required: true,
            trim: true,
            validate(value) {
                if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
                    throw new Error("Email is not valid.");
                }
            }
        },
        user_password: {
            type: String,
            required: true,
            trim: true,
            minLength: 6
        },
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;