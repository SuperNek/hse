import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Group = sequelize.define('Group', {
    group_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    group_name: {
        type: DataTypes.STRING
    },
    age_track: {
        type: DataTypes.STRING,
        allowNull: false
    },
    semester:{
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

