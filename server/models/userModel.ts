import {Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes} from 'sequelize';
import {sequelize} from '../config/database';
import bcrypt from 'bcryptjs';


interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<number>
    name: string,
    email: string,
    password: string
}

const User = sequelize.define<UserModel>('User', {
    id : {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            len : [6,12]
        }
    }
}, {
    freezeTableName: true,
    hooks : {
        beforeCreate : async (user) => {
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(user.password, salt);
        }
    }
})

User.prototype.validPassword = async function(password : string) {
    return await bcrypt.compare(password, this.password);
}
const initUser = async () => {
    await User.sync({alter: true});
}

initUser();

export default User;