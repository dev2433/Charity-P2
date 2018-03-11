module.exports = function(sequelize, DataTypes) {
  var UserFavoriteCharity = sequelize.define("UserFavoriteCharity", {
    favoriteCharityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },      
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },      
    
  });
  return UserFavoriteCharity;
};
