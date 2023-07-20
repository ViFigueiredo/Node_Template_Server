import express from 'express';
import helmet from 'helmet';
import { cors, corsOptions } from './configs/cors';
import routes from './routes';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(routes);

module.exports = app;
