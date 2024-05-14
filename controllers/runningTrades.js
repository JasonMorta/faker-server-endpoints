const { faker } = require('@faker-js/faker');

const from = "2000/1/1";
const to = "2024/4/3";

exports.runningTrades = async (req, res) => {
      const userObject = () =>{
            return {
                symbol: 'EURUSD',
                stopLoss: faker.finance.amount(),
                swaps: faker.finance.amount(),
                volume: faker.finance.amount(),
                profit: faker.finance.amount(),
                takeProfit: faker.finance.amount(),
                type: 'Buy',
                openPrice: faker.finance.amount(),
                price: faker.finance.amount(),
      }};
      const generatedUsers = faker.helpers.multiple(userObject, {
            count: 1,
      });
    
      res.send(generatedUsers);
};
