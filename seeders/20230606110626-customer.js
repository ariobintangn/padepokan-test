"use strict";
const fs = require("fs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let Customers = JSON.parse(
      fs.readFileSync("./data/customer.json"),
      "utf-8"
    ).map((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    return queryInterface.bulkInsert("Customers", Customers, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Customers", null, {});
  },
};
