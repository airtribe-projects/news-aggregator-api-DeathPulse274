const newsService = require('../services/news.services');

exports.getPersonalizedNews = async (req, res, next) => {
    try {
        const articles = await newsService.fetchNews(
            req.user.preferences.categories
        );
        res.json({
            user: req.user.email,
            preferences: req.user.preferences,
            articles
        });
    } catch (error) {
        next(error);
    }
};

exports.updatePreferences = async (req, res, next) => {
    try {
        const { categories } = req.body;
        if (!Array.isArray(categories)) {
            return res.status(400).json({ message: 'Categories should be an array' });
        }
        req.user.preferences.categories = categories;
        await req.user.save();
        res.json({ message: 'Preferences updated successfully', preferences: req.user.preferences });
    } catch (error) {
        next(error);
    }
}