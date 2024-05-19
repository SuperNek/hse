import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Instructor = sequelize.define('Instructor', {
    instructor_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_number:{
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date:{
        type: DataTypes.DATE,
        allowNull: false
    }
})