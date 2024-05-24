const { faker } = require('@faker-js/faker');

const from = "2000/1/1";
const to = "2024/4/3";

const createRandomUser = () => {
  const formatting = { min: 0, max: 1000, dec: 2, symbol: '', autoFormat: true }
  return {
    // summary table
    login: faker.string.numeric(5),
    deposit: parseFloat(faker.finance.amount(formatting)),
    withdraw: parseFloat(faker.finance.amount(formatting)),
    inOut: parseFloat(faker.finance.amount(formatting)),
    credit: parseFloat(faker.finance.amount(formatting)),
    additional: parseFloat(faker.finance.amount(formatting)),
    commission: parseFloat(faker.finance.amount(formatting)),
    fee: parseFloat(faker.finance.amount(formatting)),
    currentBalance: parseFloat(faker.finance.amount(formatting)),
    currentEquity: parseFloat(faker.finance.amount(formatting)),
    margin: parseFloat(faker.finance.amount(formatting)),
    currencies: {
      zar: parseFloat(faker.finance.amount(formatting)),
      usd: parseFloat(faker.finance.amount(formatting)),
    },

    // overview tab
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    accountNumber: faker.string.numeric(10),
    accountType: 'Standard',
    leverage: '1:100',
    phone: faker.string.numeric(8),
    metaQuotesID: faker.string.numeric(10),
    email: faker.internet.email(),
    country: faker.location.country(),
    registered: faker.date.between({ from, to }).toISOString().split('T')[0], // required format for input is YYYY-MM-DD
    lastAccess: faker.date.between({ from, to }).toISOString().split('T')[0],
    lastIPAddress: faker.internet.ip(),
    languages: ['English', 'Afrikaans', 'French'],
    statuses: ['Active', 'Inactive', 'Pending'],
    countries: ['USA', 'Canada', 'SA'],
    company: faker.company.name(),
    id: faker.string.uuid(),
    runningTrades: [
      {
        symbol: 'EURUSD',
        stopLoss: parseFloat(faker.finance.amount(formatting)),
        swaps: parseFloat(faker.finance.amount(formatting)),
        volume: parseFloat(faker.finance.amount(formatting)),
        profit: parseFloat(faker.finance.amount(formatting)),
        takeProfit: parseFloat(faker.finance.amount(formatting)),
        type: 'Buy',
        openPrice: parseFloat(faker.finance.amount(formatting)),
        price: parseFloat(faker.finance.amount(formatting))
      },
      {
        symbol: 'USDJPY',
        stopLoss: parseFloat(faker.finance.amount(formatting)),
        swaps: parseFloat(faker.finance.amount(formatting)),
        volume: parseFloat(faker.finance.amount(formatting)),
        profit: parseFloat(faker.finance.amount(formatting)),
        takeProfit: parseFloat(faker.finance.amount(formatting)),
        type: 'Sell',
        openPrice: parseFloat(faker.finance.amount(formatting)),
        price: parseFloat(faker.finance.amount(formatting))
      },
      {
        symbol: 'GBPUSD',
        stopLoss: parseFloat(faker.finance.amount(formatting)),
        swaps: parseFloat(faker.finance.amount(formatting)),
        volume: parseFloat(faker.finance.amount(formatting)),
        profit: parseFloat(faker.finance.amount(formatting)),
        takeProfit: parseFloat(faker.finance.amount(formatting)),
        type: 'Buy',
        openPrice: parseFloat(faker.finance.amount(formatting)),
        price: parseFloat(faker.finance.amount(formatting))
      }
    ],
    accountInfo: {
      balance: parseFloat(faker.finance.amount(formatting)),
      equity: parseFloat(faker.finance.amount(formatting)),
      margin: parseFloat(faker.finance.amount(formatting)),
      freeMargin: parseFloat(faker.finance.amount(formatting)),
      marginLevel: parseFloat(faker.finance.amount(formatting))
    }
  };
};

// Function to generate a large number of random user accounts and calculate totals
const generateUsersWithTotals = (count) => {
  const users = [];
  const totals = {
    deposit: 0,
    withdraw: 0,
    inOut: 0,
    credit: 0,
    additional: 0,
    commission: 0,
    fee: 0,
    currentBalance: 0,
    currentEquity: 0,
    margin: 0,
    swaps: 0,
    volume: 0,
    profit: 0
  };

  for (let i = 0; i < count; i++) {
    const user = createRandomUser();
    users.push(user);

    // Aggregate the totals
    totals.deposit += user.deposit;
    totals.withdraw += user.withdraw;
    totals.inOut += user.inOut;
    totals.credit += user.credit;
    totals.additional += user.additional;
    totals.commission += user.commission;
    totals.fee += user.fee;
    totals.currentBalance += user.currentBalance;
    totals.currentEquity += user.currentEquity;
    totals.margin += user.margin;
    totals.swaps += user.runningTrades.reduce((acc, trade) => acc + trade.swaps, 0);
    totals.volume += user.runningTrades.reduce((acc, trade) => acc + trade.volume, 0);
    totals.profit += user.runningTrades.reduce((acc, trade) => acc + trade.profit, 0);
  }

  // Fix totals to 2 decimal places
  for (let key in totals) {
    if (totals.hasOwnProperty(key)) {
      totals[key] = parseFloat(totals[key].toFixed(2));
    }
  }

  return { users, totals };
};

const generatedUsers = generateUsersWithTotals(50000);

module.exports = {
  generatedUsers
};
