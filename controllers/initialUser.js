const { faker } = require('@faker-js/faker');

const from = "2000/1/1";
const to = "2024/4/3";

exports.initialUser = async (req, res) => {
      const userObject = () =>{
            return {
            name: faker.person.firstName() + " " + faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            phone: faker.phone.number(),
            address: {
                  street: faker.location.street(),
                  city: faker.location.city(),
                  state: faker.location.state(),
                  zip: faker.location.zipCode(),
                  country: faker.location.country(),
            },
      }};
      const generatedUsers = faker.helpers.multiple(userObject, {
           
            count: 100000,
      });
    
      res.send(generatedUsers);
};
