require('dotenv').config();
const express = require('express');
const connectDb = require('./src/config/db');
const authRoutes = require('./src/routes/auth.routes');
const newsRoutes = require('./src/routes/news.routes');
const app = express();

connectDb();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An error occurred', error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
