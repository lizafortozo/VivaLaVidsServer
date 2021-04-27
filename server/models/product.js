const { DataTypes } = require("sequelize");
const db = require("../db");

module.exports = db.define('product', {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productName : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productImg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  material: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = product;