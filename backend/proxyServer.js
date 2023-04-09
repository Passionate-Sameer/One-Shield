const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const proxyServer = express();

// Reverse proxy to Middleware Server
proxyServer.all('/api/*', (req, res) => {
    apiProxy.web(req, res, {
        target: 'http://localhost:5060',
    });
});

// Serve static files from the public directory
proxyServer.use(express.static(path.join(__dirname, 'public')));

// Start server
const port = process.env.PORT || 5050;
proxyServer.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
