const { Customer, Transaction } = require("../models");
const { Op } = require("sequelize");

class CustomerController {
  static async customers(req, res, next) {
    try {
      const customers = await Customer.findAll({
        include: [
          {
            model: Transaction,
          },
        ],
      });
      console.log(customers);

      res.status(200).json(customers);
    } catch (error) {
      next(error);
    }
  }

  static async createCustomer(req, res, next) {
    console.log("<<< MASUK CONTROLLER SERVER");
    try {
      const { name } = req.body;
      const newCustomer = await Customer.create(
        {
          name,
        },
        {}
      );

      res.status(201).json({
        newCustomer,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const user = await master_user.findByPk(+req.params.id);

      if (!user) {
        throw "User Not Found!";
      }
      await master_user.destroy({
        where: {
          id: req.params.id,
        },
      });

      res
        .status(200)
        .json({ message: `user with id: ${+req.params.id} has been deleted` });
    } catch (error) {
      console.log("masuk error");
      console.log(error);
      next(error);
    }
  }

  static async customerTime(req, res, next) {
    try {
      const { id, startDate, endDate} = req.body;
      const adjustedEndDate = new Date(endDate);
      const adjustedStartDate = new Date(startDate);
      adjustedEndDate.setHours(23, 59, 59, 999);
      adjustedStartDate.setHours(0,0,0,0);

      const time = await Customer.findOne({
        where: { id },
        include: [
          {
            model: Transaction,
            where: {
              accountId: id,
              transactionDate: {
                [Op.between]: [adjustedStartDate, adjustedEndDate],
              },
            },
          },
        ],
      });

      res.status(200).json({
        message: "this are timed transaction",
        time,
      });
    } catch (error) {
      console.log(error);
      
      next(error);
    }
  }
}

module.exports = CustomerController;
