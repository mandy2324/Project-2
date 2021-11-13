const User = require('./User');
const Favorite = require('./Favorite');

User.hasMany(Favorite, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Favorite.belongsTo(User, {

  foreignKey: 'user_id',
// =======
//   foreignKey: 'user_id'
// >>>>>>> main
});

module.exports = { User, Favorite };
