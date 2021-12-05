const mongoose = require('mongoose');

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
  {
    useNewUrlParser: true,
  }
)
mongoose.Promise = global.Promise;

mongoose.connection.on('error', () => console.error('Connection error:'))
mongoose.connection.once('open', () => console.log('Database connected'))

module.exports = mongoose;
