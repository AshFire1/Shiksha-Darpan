const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());



const API_KEY = process.env.GEMINI_API_KEY;
console.log("Using API key:", API_KEY);
app.post('/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post(
            ` https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
           
            {
                contents: [
                    {
                        role: "user",
                        parts: [{ text: message }]
                    }
                ]
            }
        );

        const reply = response.data.candidates[0].content.parts[0].text;
        res.json({ reply });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: 'Gemini API Error' });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
