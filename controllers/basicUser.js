const { faker } = require('@faker-js/faker');




exports.basicUser = async (req, res) => {
      console.log('got the request')
      const requested = parseInt(req.query.count) || 9;

      let id = 0;

      const userObject = () => {
            return {
                  id: id++,
                  firstName: faker.person.firstName(),
                  lastName: faker.person.lastName(),
                  fullName: faker.person.fullName(),

                  //age between 21 and 100
                  age: parseInt(faker.string.numeric(2, { allowLeadingZeros: false })) % 80 + 21,
                  email: faker.internet.email(),
                  //object
                  address: {
                        street: faker.address.street(),
                        city: faker.address.city(),
                        state: faker.address.state(),
                        zip: faker.address.zipCode(),
                        country: faker.address.country()
                  },
                  //array
                  favColors: [faker.color.human(), faker.color.human(), faker.color.human()],

            }
      };
      const generatedUsers = faker.helpers.multiple(userObject, {
            count: requested,
      });

      //sum up all the ages
      const totalAge = generatedUsers.reduce((acc, user) => acc + user.age, 0);




      try {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(generatedUsers);

      } catch (error) {
            console.log('error', error)
            res.status(500).send({ message: error.message });
      }
};
