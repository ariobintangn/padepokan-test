const { Customer, Transaction } = require("../models");

class TransactionController {
  static async transactions(req, res, next) {
    try {
      const transactions = await Transaction.findAll({
        include: [
          {
            model: Customer,
          },
        ],
      });
      console.log(transactions);

      res.status(200).json(transactions);
    } catch (error) {
      next(error);
    }
  }

  static async createTransaction(req, res, next) {
    try {
      const {
        accountId,
        description,
        debitCreditStatus,
        amount,
      } = req.body;
      const newTransaction = await Transaction.create(
        {
          accountId,
          transactionDate: new Date(),
          description,
          debitCreditStatus,
          amount,
        },
      );

      res.status(201).json({
        newTransaction,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

}

module.exports = TransactionController;
