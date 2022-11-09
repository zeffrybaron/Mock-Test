const sequelize = require('./sequelize')
// const Roles = require('./roles')
const Users = require('./users')

// Roles.hasMany(Users, {
//   as: 'users',
//   foreignKey: 'role_id',
// })

// Users.belongsTo(Roles, { 
//   as: 'role',
//   foreignKey: 'role_id',
// })

module.exports = {
  sequelize,
  // Roles,
  Users,
}