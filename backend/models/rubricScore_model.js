import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Lesson } from './lesson_model.js';
import { CourseRubric } from './courseRubric_model.js';
import { GeneralRubric } from './generalRubric_model.js';
import { Child } from './child_model.js';

export const RubricScore = sequelize.define("RubricScore", {
    rubric_score_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lesson_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Lesson,
            key: "lesson_id"
        }
    },
    child_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Child,
            key: "child_id"
        }
    },
    rubric_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rubric_type:{
        type: DataTypes.ENUM("Course", "General"),
        allowNull: false
    },
    score:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

RubricScore.belongsTo(Lesson, {foreignKey: "lesson_id"});
RubricScore.belongsTo(Child, {foreignKey: "child_id"});
RubricScore.belongsTo(CourseRubric, {foreignKey: "rubric_id"});
RubricScore.belongsTo(GeneralRubric, {foreignKey: "rubric_id"});