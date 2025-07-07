import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

const GUARDIAN_API = 'https://content.guardianapis.com/search?q=oil%20and%20gas&api-key=f8f047fd-b751-4d6e-80de-76f4e9c7feb1';

app.get('/api/news', async (req, res) => {
  try {
    const response = await fetch(GUARDIAN_API);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));