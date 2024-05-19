import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Child } from './child_model.js';

export const Report = sequelize.define('Report', {
    report_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    child_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Child,
            key: 'child_id'
        }
    },
    semester: {
        type: DataTypes.STRING,
        allowNull: false
    },
    report_link:{
        type: DataTypes.STRING,
        allowNull: true
    },
    case_link:{
        type: DataTypes.STRING,
        allowNull: true
    }
})

Report.belongsTo(Child, {foreignKey: 'child_id'});
Child.hasMany(Report, {foreignKey: 'child_id'});