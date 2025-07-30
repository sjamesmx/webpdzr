const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head>
        <title>Padelyzer - Test Server</title>
      </head>
      <body style="background: black; color: white; font-family: sans-serif; text-align: center; padding: 50px;">
        <h1 style="color: #E3FD72;">Padelyzer está funcionando</h1>
        <p>El servidor de prueba está activo en el puerto 8080</p>
        <p>Si puedes ver esto, la conectividad está bien.</p>
      </body>
    </html>
  `);
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Test server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop');
});

// Keep process alive
process.on('SIGINT', () => {
  console.log('\nShutting down test server...');
  server.close();
  process.exit();
});