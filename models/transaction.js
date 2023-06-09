'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsTo(models.Customer, {foreignKey:"accountId"})
    }
  }
  Transaction.init({
    accountId: DataTypes.INTEGER,
    transactionDate: DataTypes.DATE,
    description: DataTypes.STRING,
    debitCreditStatus: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};