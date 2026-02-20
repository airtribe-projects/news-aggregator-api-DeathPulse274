const authService = require('../services/auth.service');
exports.register = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await authService.register(username, password);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        next(error);
    }
};
exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const data = await authService.looginUser(username, password);
        res.json(data);
    } catch (error) {
        next(error);
    }
};