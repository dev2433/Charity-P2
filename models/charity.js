module.exports = function(sequelize, DataTypes) {
  var charity = sequelize.define("charity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      },

       state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
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
          len: [1, 100]
        }
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [10, 15]
        }
      },

      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [100]
        }
      },

      
    
  });
  return charity;
};
