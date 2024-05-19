import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Group } from './group_model.js';

export const Child = sequelize.define('Child', {
    child_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    additionalInfo:{
        typeL: DataTypes.TEXT,
        allowNull: true
    },
    group_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Group,
            key: 'group_id'
        }
    }
})

Child.belongsTo(Group, {foreignKey: 'group_id'});
Group.hasMany(Child, {foreignKey: 'group_id'});