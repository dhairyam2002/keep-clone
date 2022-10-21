import express, {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';


dotenv.config({path : 'config/config.env'});

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1', userRoutes);

export default app;