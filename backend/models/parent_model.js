import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Parent = sequelize.define('Parent', {
    parent_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_number: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

