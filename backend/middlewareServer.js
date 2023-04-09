const cors = require("cors");
const express = require('express');
const axios = require('axios');

const middlewareServer = express();

// Middlewares
middlewareServer.use(cors());
middlewareServer.use(express.json());
middlewareServer.use(express.urlencoded({ extended: false }));

// Endpoints
middlewareServer.post('/api/v1/quick_quote', async (req, res) => {
  try {
    // TODO: Perform additional processing or validation

    // Forward request to API server
    const response = await axios.post('http://localhost:5070/api/v1/quick_quote', req.body);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

// Start server
const port = process.env.PORT || 5060;
middlewareServer.listen(port, () => {
  console.log(`Middleware server listening on port ${port}`);
});
