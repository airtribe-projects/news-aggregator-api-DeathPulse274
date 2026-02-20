const mangoose = require('mongoose');

const userSchema = new mangoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    preferences: {
        categories: {
            type: [String],
            default: [],
        },
    }
}, { timestamps: true });

module.exports = mangoose.model('User', userSchema);