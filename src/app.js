import Express from 'express';
import cors from 'cors';

import test from './routers/test'

let app = Express();

app.use(cors());

app.use('/api', test);

module.exports = app;

const server = app.listen(9009, () => {
  // const host = server.address().address;
  // const port = server.address().port;

  console.log(`http://localhost:${9009}`);
});