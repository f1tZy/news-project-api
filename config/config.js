require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';


module.exports = {
  PORT: 3000,
  JWT_SECRET: isProduction ? process.env.JWT_SECRET : 'dev-secret_key',
  DATA_URL: 'mongodb://localhost:27017/newsprojectdb',
};
