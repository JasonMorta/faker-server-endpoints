const { faker } = require('@faker-js/faker');




exports.initialUser = async (req, res) => {
      console.log('got the request')

      const from = "2000/1/1";
const to = "2024/4/3";

const userObject = () => {
      return {
            id: faker.string.nanoid(3),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            fullName: faker.person.fullName(),
            age: parseInt(faker.string.numeric(2, { allowLeadingZeros: false })) % 91 + 21,
      

      }
};
const generatedUsers = faker.helpers.multiple(userObject, {
      count: 250000,
});

//sum up all the ages
const totalAge = generatedUsers.reduce((acc, user) => acc + user.age, 0);




      try {
            console.log(' Sending 1,000,000 users to the client')
            res.status(200).send({generatedUsers: generatedUsers, totalAge: totalAge});
      } catch (error) {
            console.log('error', error)
            res.status(500).send({ message: error.message });
      }
};
