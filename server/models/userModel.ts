import {Sequelize, Model, DataTypes, Optional} from 'sequelize';
import {sequelize} from '../config/database';


interface UserAttributes {
    id: number;
    name: string;
    email : string;
    password: string;
    lastLogin : Date;
}


export interface UserInput extends Optional<UserAttributes, 'id' | 'lastLogin'> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id! : number
    public name!: string
    public email! : string
    public password! : string
    public lastLogin! : Date
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastLogin: {
        type: DataTypes.DATE,
    }

}, {
    timestamps: true,
    sequelize,
    paranoid: true
})

const initializeUserTable = async () => {
    await User.sync({alter : true});
}

initializeUserTable();
export default User;
