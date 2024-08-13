const { faker } = require('@faker-js/faker');
console.log('Controller accountSummaryStream.js hit🎮');



exports.accountSummaryStream = async (req, res) => {
    const from = "2000/1/1";
    const to = "2024/4/3";

const createRandomUser = () => {
    return {
        // summary table
        login: faker.string.numeric(7),
        deposit: faker.finance.amount(),
        withdraw: faker.finance.amount(),
        inOut: faker.finance.amount(),
        credit: faker.finance.amount(),
        additional: faker.finance.amount(),
        commission: faker.finance.amount(),
        fee: faker.finance.amount(),
        currentBalance: faker.finance.amount(),
        currentEquity: faker.finance.amount(),
        margin: faker.finance.amount(),
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

        //Limits
        showToRegularManagers: faker.datatype.boolean(),
        serverReports: faker.datatype.boolean(),
        dailyReports: faker.datatype.boolean(),
        apiConnections: faker.datatype.boolean(),
        sponsored_VPS_Hosting: faker.datatype.boolean(),
        enableTrading: faker.datatype.boolean(),
        algoTradingByExpertAdvisors: faker.datatype.boolean(),
        trailingStops: faker.datatype.boolean(),
        totalValueOfOpenPositions: ['Default', 1111],
        numberOfActiveOrders: ['Default', 1,2,3,4,5,6,7,8,9,10,],

        // running trades
        symbol: 'EURUSD',
        stopLoss: faker.finance.amount(),
        swaps: faker.finance.amount(),
        volume: faker.finance.amount(),
        profit: faker.finance.amount(),
        takeProfit: faker.finance.amount(),
        type: 'Buy',
        openPrice: faker.finance.amount(),
        price: faker.finance.amount(),

        // OverView table totals
        totals: {
            deposit: faker.finance.amount(),
            withdraw: faker.finance.amount(),
            inOut: faker.finance.amount(),
            credit: faker.finance.amount(),
            swaps: faker.finance.amount(),
            additional: faker.finance.amount(),
            volume: faker.finance.amount(),
            commission: faker.finance.amount(),
            fee: faker.finance.amount(),
            profit: faker.finance.amount(),
            currentBalance: faker.finance.amount(),
            currentEquity: faker.finance.amount(),
            margin: faker.finance.amount(),
        }
    };
};

// Function to generate a large number of random user accounts
const generatedUsers = faker.helpers.multiple(createRandomUser, {
    count: 400000,
});
    console.log('processing request for accountSummaryUsers');

    const batchSize = 1000; // Adjust batch size as needed
    const totalUsers = 400000;
    const numBatches = Math.ceil(totalUsers / batchSize);
    console.log(`Sending ${totalUsers} users to the client in ${numBatches} batches`);

    for (let i = 0; i < numBatches; i++) {
        const start = i * batchSize;
        const end = Math.min((i + 1) * batchSize, totalUsers);
        const usersBatch = generatedUsers.slice(start, end);
        res.write(JSON.stringify(usersBatch));
    }

    res.end();
    console.log('Request processed successfully!');
};
