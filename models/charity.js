module.exports = function(sequelize, DataTypes) {
  var my_charity = sequelize.define("my_charity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      url_image: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
  });
  return my_charity;
};
