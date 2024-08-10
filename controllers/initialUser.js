const { faker } = require('@faker-js/faker');




exports.initialUser = async (req, res) => {
      console.log('got the request')
      const requested = parseInt(req.query.count) || 500;

      const from = "2000/1/1";
      const to = "2024/4/3";
      let id = 0;
      const userObject = () => {

            return {
                  id: id++,
                  firstName: faker.person.firstName(),
                  lastName: faker.person.lastName(),
                  fullName: faker.person.fullName(),

                  //age between 21 and 100
                  age: parseInt(faker.string.numeric(2, { allowLeadingZeros: false })) % 80 + 21,


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
