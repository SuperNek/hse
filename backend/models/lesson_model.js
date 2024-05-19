import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Course } from './course_model.js';
import { Group } from './group_model.js';
import { RubricScore } from './rubricScore_model.js';


export const Lesson = sequelize.define('Lesson', {
    lesson_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'course_id'
        }
    },
    group_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Group,
            key: 'group_id'
        }
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    methodology_feedback:{
        type: DataTypes.TEXT,
        allowNull: true
    }
})

Lesson.belongsTo(Course, { foreignKey: 'course_id' });
Lesson.belongsTo(Group, { foreignKey: 'group_id' });

Lesson.hasMany(RubricScore, { foreignKey: 'lesson_id' });
