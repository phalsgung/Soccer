import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';


const app = express();
const PORT = 3000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

routes(app);

app.get('/', (req, res) =>
	res.send(`Soccer Application is running from Node.js index file on PORT: ${PORT} `)
);

app.listen(PORT, () =>
	console.log(`Soccer Server running on PORT: ${PORT}`)
)