import express, {Request, Response, NextFunction} from 'express';
import { Sequelize, Model, DataTypes } from 'sequelize';

const app = express();

app.get("/", (req : Request, res : Response, next : NextFunction) => {
    res.send("working!");
})

const sequelize = new Sequelize('keep', 'root', 'Hjsywt45s2w3#', {
    host: 'localhost',
    dialect: 'mysql'
})


sequelize.authenticate().then(()=> {
    console.log('Connection successful!');
}).catch((error) => console.log(error));

app.listen(3000);