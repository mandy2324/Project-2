const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {}

Favorite.init(
  {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.INTEGER,
    },
    poster_path: {
      type: DataTypes.STRING,
    },
    backdrop_path: {
      type: DataTypes.STRING,
    },
    overview: {
      type: DataTypes.STRING,
// =======
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
// >>>>>>> main
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite',
  }
);

module.exports = Favorite;
