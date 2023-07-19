require('dotenv').config();

const app = require('./app');
const port = process.env.APP_PORT || 3000;
const host = process.env.APP_HOST || 'http://localhost';

app.listen(port, () => {
  console.log(`[+][SRV] -> ${host}:${port}`);
});
