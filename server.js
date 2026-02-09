import "dotenv/config";
import express from 'express';
import next from 'next';
import { createProxyMiddleware } from 'http-proxy-middleware';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Define a route that proxies requests to another website
    server.use(['/dashboard',"/js","/css","/img","/fonts"], createProxyMiddleware({
        target: process.env.REDIRECT_URL, // Replace this with the URL of the website you want to proxy to
        changeOrigin: true, // Required for virtual hosted sites
        pathRewrite: {
            '^/dashboard': '', // Remove the '/proxy' part of the URL
        },
    }));

    // Handle all other requests with Next.js
    server.all('*', (req, res) => {
        return handle(req, res);
    });


    server.listen(process.env.PORT || 3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
