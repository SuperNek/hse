import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Child } from './child_model.js';
import { Parent } from './parent_model.js';

export const ChildParent = sequelize.define("ChildParent",{
    child_id: {
        type: DataTypes.INTEGER,
        references:{
            model: Child,
            key:"child_id"
        },
        allowNull: false
    },
    parent_id: {
        type: DataTypes.INTEGER,
        references:{
            model: Parent,
            key:"parent_id"
        },
        allowNull: false
    }
});

Child.belongsToMany(Parent, { through: ChildParent });
Parent.belongsToMany(Child, { through: ChildParent });