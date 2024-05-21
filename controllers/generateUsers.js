const { faker } = require('@faker-js/faker');

const from = "2000/1/1";
const to = "2024/4/3";

const createRandomUser = () => {
  return {
    // summary table
    login: faker.string.numeric(7),
    deposit: parseFloat(faker.finance.amount()),
    withdraw: parseFloat(faker.finance.amount()),
    inOut: parseFloat(faker.finance.amount()),
    credit: parseFloat(faker.finance.amount()),
    additional: parseFloat(faker.finance.amount()),
    commission: parseFloat(faker.finance.amount()),
    fee: parseFloat(faker.finance.amount()),
    currentBalance: parseFloat(faker.finance.amount()),
    currentEquity: parseFloat(faker.finance.amount()),
    margin: parseFloat(faker.finance.amount()),
    currency: faker.finance.currencyCode(),

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

    // running trades
    symbol: 'EURUSD',
    stopLoss: parseFloat(faker.finance.amount()),
    swaps: parseFloat(faker.finance.amount()),
    volume: parseFloat(faker.finance.amount()),
    profit: parseFloat(faker.finance.amount()),
    takeProfit: parseFloat(faker.finance.amount()),
    type: 'Buy',
    openPrice: parseFloat(faker.finance.amount()),
    price: parseFloat(faker.finance.amount())
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
    totals.swaps += user.swaps;
    totals.volume += user.volume;
    totals.profit += user.profit;
  }

  return { users, totals };
};

const generatedUsers =  { users: users, totals: totals } = generateUsersWithTotals(10000);

module.exports = {
  generatedUsers
};
