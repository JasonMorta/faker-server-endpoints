const { faker } = require('@faker-js/faker');

const from = "2000/1/1";
const to = "2024/4/3";

exports.initialUser = async (req, res) => {
      const userObject = () =>{
            return {
                name: faker.person.firstName(),
                lastName: faker.person.lastName(),
                accountNumber: faker.string.numeric(10),
                accountType: 'Standard',
                leverage: '1:100',
                phone: faker.string.numeric(8),
                metaQuotesID: faker.string.numeric(10),
                email: faker.internet.email(),
                country: faker.location.country(),
                registered: faker.date.between({ from, to }).toLocaleDateString(),
                lastAccess: faker.date.between({ from, to }).toLocaleDateString(),
                lastIPAddress: faker.internet.ip(),
      }};
      const generatedUsers = faker.helpers.multiple(userObject, {
           
            count: 1,
      });
    
      res.send(generatedUsers);
};
