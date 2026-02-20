const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

exports.register = async (username, password) => {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    return user;
};

exports.looginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid username or password');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid username or password');
    }
    const token = generateToken(user._id);
    return { user, token };
}