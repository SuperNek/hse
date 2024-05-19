import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { CourseRubric } from './courseRubric_model.js';
import { GeneralRubric } from './generalRubric_model.js';

export const Course = sequelize.define('course', {
    course_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age_track:{
        type: DataTypes.STRING,
        allowNull: false
    },
    link_to_course:{
        type: DataTypes.STRING,
        allowNull: false
    },
    link_to_feedback:{
        type: DataTypes.STRING,
        allowNull: true
    },
    additional_info:{
        type: DataTypes.STRING,
        allowNull: true
    }
})

Course.hasMany(CourseRubric, {foreignKey: 'course_id'});
Course.belongsToMany(GeneralRubric, {through: "CourseGeneralRubric"});
