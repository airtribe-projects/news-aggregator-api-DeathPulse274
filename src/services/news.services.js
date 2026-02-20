const axios = require('axios');
exports.fetchNews = async (categories) => {
    try {
        const category = categories?.[0] || 'general';
        console.log('Fetching news for category:', category);
        console.log('API Key:', process.env.NEWS_API_KEY);

        const url = "https://newsapi.org/v2/top-headlines";
        const params = {
            category,
            apiKey: process.env.NEWS_API_KEY,
        };
        console.log('Request URL:', url);
        console.log('Request params:', params);

        const response = await axios.get(url, { params });
        console.log('Full API Response:', JSON.stringify(response.data, null, 2));
        console.log('News API response:', response.data.articles?.length || 0, 'articles found');
        return response.data.articles || [];
    } catch (error) {
        console.error('Error fetching news:', error.message);
        if (error.response?.data) {
            console.error('API Error Details:', JSON.stringify(error.response.data, null, 2));
        }
        return [];
    }
}
