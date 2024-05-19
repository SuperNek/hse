import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Course } from './course_model.js';

export const CourseRubric = sequelize.define('CourseRubric', {
    course_rubric_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    criteria:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

CourseRubric.belongsTo(Course, {foreignKey: 'course_id'})