const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const newsController = require('../controllers/news.controller');

router.get("/", authMiddleware, newsController.getPersonalizedNews);
router.put("/preferences", authMiddleware, newsController.updatePreferences);

module.exports = router;

