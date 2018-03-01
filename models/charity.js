module.exports = function(sequelize, DataTypes) {
  var my_charity = sequelize.define("my_charity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [100]
        }
      },

       state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [100]
        }
      },

       zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [100]
        }
      },

      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [100]
        }
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [100]
        }
      },

      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [100]
        }
      },

      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [100]
        }
      },

      url_image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [100]
        }
      },
  });
  return my_charity;
};
