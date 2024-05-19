import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const GeneralRubric = sequelize.define('GeneralRubric', {
    general_rubric_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
})