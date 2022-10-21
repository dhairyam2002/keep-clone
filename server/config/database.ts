import {Sequelize} from 'sequelize';




export const sequelize = new Sequelize(process.env.DB_NAME || "keep", process.env.DB_USER || "root", process.env.DB_PASSWORD || "Hjsywt45s2w3#", {
    dialect: 'mysql',
    'host' : 'localhost'
})


export const connectToDatabase = () : void => {
    sequelize.authenticate().then(()=> {
        console.log('Connection successful!');
    }).catch((error) => console.log(error));
}

