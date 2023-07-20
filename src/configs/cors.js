import cors from 'cors';

const whiteList = ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    const allowed = whiteList.includes(origin);
    callback(null, allowed);
  },
};

module.exports = { cors, corsOptions };
