import * as express from 'express';

// Create a new express application instance
const app: express.Application = express();

const port: number = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`server listening on port ${port}!`);
});
