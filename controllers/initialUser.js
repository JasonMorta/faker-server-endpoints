// const { faker } = require('@faker-js/faker');

// const from = "2000/1/1";
// const to = "2024/4/3";

// const userObject = () => {
//       return {
//             id: faker.string.nanoid(3),
//             name: faker.person.firstName() + " " + faker.person.lastName(),
//             email: faker.internet.email(),
//             password: faker.internet.password(),
//             phone: faker.phone.number(),
//             street: faker.location.street(),
//             city: faker.location.city(),
//             state: faker.location.state(),
//             zip: faker.location.zipCode(),
//             country: faker.location.country(),

//       }
// };
// const generatedUsers = faker.helpers.multiple(userObject, {
//       count: 1000000,
// });



// exports.initialUser = async (req, res) => {
//       console.log('got the request')

//       try {
//             console.log(' Sending 1,000,000 users to the client')
//             res.status(200).send(generatedUsers);
//       } catch (error) {
//             console.log('error', error)
//             res.status(500).send({ message: error.message });
//       }
// };
