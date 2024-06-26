const { faker } = require('@faker-js/faker');

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



        //overview tab
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        accountNumber: faker.string.numeric(10),
        accountType: 'Standard',
        leverage: '1:100',
        phone: faker.string.numeric(8),
        metaQuotesID: faker.string.numeric(10),
        email: faker.internet.email(),
        country: faker.location.country(),
        // registered: faker.date.between({ from, to }).toLocaleDateString(), //DD/MM/YYYY format
        // lastAccess: faker.date.between({ from, to }).toLocaleDateString(),
        registered: faker.date.between({ from, to }).toISOString().split('T')[0], // required format fro input is YYYY-MM-DD
        lastAccess: faker.date.between({ from, to }).toISOString().split('T')[0],
        lastIPAddress: faker.internet.ip(),
        languages: ['English', 'Afrikaans', 'French'],
        statuses: ['Active', 'Inactive', 'Pending'],
        countries: ['USA', 'Canada', 'SA'],
        company: faker.company.name(),
        id: faker.string.uuid(),


        //running trades
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
const generatedUsers = faker.helpers.multiple(createRandomUser, {
    count: 1,
});


// Generate a large number of random user accounts
const generateUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push(createRandomUser());
    }
    return users;
};

exports.accountSummaryPaginated = async (req, res) => {
    console.log('processing request for accountSummaryUsers')


    const { page, pageSize } = req.query;
    const pageNumber = parseInt(page, 10) || 1;
    const pageSizeNumber = parseInt(pageSize, 10) || 10;

    // Generate a subset of user accounts based on pagination parameters
    const users = generateUsers(pageSizeNumber);

    // Send the paginated response
    res.json({
        page: pageNumber,
        pageSize: pageSizeNumber,
        totalPages: Math.ceil(totalUsers / pageSizeNumber),
        users: users,
    });
};
