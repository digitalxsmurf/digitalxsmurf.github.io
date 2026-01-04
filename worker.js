export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html>
<head>
  <title>My Static Page</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; margin: 2em; }
    h1 { color: #0070f3; }
  </style>
</head>
<body>
  <h1>Welcome to My Static Page!</h1>
  <p>This page is served by a Cloudflare Worker.</p>
</body>
</html>`, {
      headers: { 'content-type': 'text/html' }
    });
  }
};