module.exports = function(sequelize, DataTypes) {
  var favorite_charity = sequelize.define("favorite_charity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 100]
      }
    },      
    
  });
  favorite_charity.associate = function (models) {
    models.favorite_charity.belongsToMany(models.User, {through: 'UserFavoriteCharity'});
  };
  return favorite_charity;
};
