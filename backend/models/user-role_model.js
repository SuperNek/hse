import { sequelize } from '../config/db.js';
import { User } from './user_model.js';
import { Role } from './role_model.js';

export const UserRole = sequelize.define('UserRole', {})

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });