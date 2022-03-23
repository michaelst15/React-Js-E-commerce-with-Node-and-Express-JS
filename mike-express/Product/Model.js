const { DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize').sequelize;

const car = sequelize.define('car', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nama: {                   
    type: DataTypes.STRING,    
    allowNull: false, 
  },
  produsen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Harga: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }, 
 },{
   timestamps : false,
 });

module.exports = {
  car
};