import { createServer } from 'node:http';
import { hostname } from 'node:os';

const VERSION = '1.0.0';
const HEADLINE = 'Everything for the workshop, delivered tomorrow';
const port = Number(process.env.PORT ?? 8080);

const page = () => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Acme Shop</title>
<style>
  body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif; background: #0f1115; color: #e8eaed; }
  main { max-width: 760px; margin: 0 auto; padding: 96px 32px; }
  .logo { font-weight: 700; font-size: 20px; margin-bottom: 64px; }
  .logo span { color: #f5a524; margin-left: 4px; }
  h1 { font-size: 44px; line-height: 1.1; letter-spacing: -0.03em; margin: 0 0 20px; }
  p { color: #a9adb6; font-size: 18px; line-height: 1.5; }
  .meta { margin-top: 64px; font-size: 14px; color: #6b7079; }
</style>
</head>
<body>
<main>
  <div class="logo">Acme<span>Shop</span></div>
  <h1>${HEADLINE}</h1>
  <p>Tools, parts and supplies from 120 brands.</p>
  <p class="meta">Version ${VERSION} · served by ${hostname()}</p>
</main>
</body>
</html>`;

createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('ok');
    return;
  }
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(page());
}).listen(port, () => console.log(`Acme Shop ${VERSION} listening on ${port}`));
