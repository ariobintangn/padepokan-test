"use strict";
const fs = require("fs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let Transactions = JSON.parse(
      fs.readFileSync("./data/transaction.json"),
      "utf-8"
    ).map((el) => {
      delete el.id;
      el.transactionDate = "28/05/2023";
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    return queryInterface.bulkInsert("Transactions", Transactions, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Transactions", null, {});
  },
};
