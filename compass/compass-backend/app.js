const express = require('express')
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const fs = require('fs')
const cors = require('cors')

//get environment vars
dotenv.config()

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME , BACKEND_PORT} = process.env

console.log(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`);

mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
  {
    useNewUrlParser: true,
  }
)

mongoose.connection.on('error', () => console.error('connection error:'))
mongoose.connection.once('open', () => console.log('database connected'))

//db
// mongoose.connect(process.env.MONGO_URI, { 
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// }).then(() => console.log('DB connected'))

// mongoose.connection.on('error', err => {
// 	console.log(`DB connection error: ${err.message}}`);
// });


const port = BACKEND_PORT || 3000;

//bring in routes
const postRoutes = require('./routes/post')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

//middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(expressValidator()); //works only with express-validator@5.3.1 and before
app.use(cors());
app.use("/", postRoutes);
app.use("/", authRoutes);
app.use("/", userRoutes);

//apiDocs
app.get('/api', (req, res) => {
	fs.readFile('docs/apiDocs.json', (err, data) => {
		if (err) {
			res.status(400).json({
				error: err
			});
		}
		const docs = JSON.parse(data)
		res.json(docs);
	});
});

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({error: "Unauthorized access!"});
  }
});

app.listen(port, () => {
	console.log(`A nodejs API is listening on port: ${port}`)
});