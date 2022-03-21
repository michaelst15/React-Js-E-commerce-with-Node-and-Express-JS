const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

const Buku = sequelize.define('Buku', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nama_buku: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jenis_buku: {
    type: DataTypes.STRING,
    allowNull: false
  },
  harga_buku: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
});

module.exports = Buku;
