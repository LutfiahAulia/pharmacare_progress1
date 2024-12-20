const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/Database/db.json'); // Ensure the correct path to db.json
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

server.use(router);
server.listen(3003, () => {
  console.log('JSON Server is running on port 3003');
});
