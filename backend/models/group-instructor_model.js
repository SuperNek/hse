import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Group } from './group_model.js';
import { Instructor } from './instructor_model.js';

export const GroupInstructor = sequelize.define('GroupInstructor', {
    group_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Group,
            key: "group_id"
        },
        allowNull: false
    },
    instructor_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Instructor,
            key: "instructor_id"
        },
        allowNull: false
    }
});

Group.belongsToMany(Instructor, {through: GroupInstructor});
Instructor.belongsToMany(Group, {through: GroupInstructor});