const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/peopleapi',
    createProxyMiddleware({
      target: 'http://localhost:15313',
      changeOrigin: true,
    })
 );};