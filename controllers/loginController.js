const { faker } = require('@faker-js/faker');




exports.loginController = async (req, res) => {

      try {
      
            res.status(200).send(generatedUsers);
          
      } catch (error) {
            console.log('error', error)
            res.status(500).send({ message: error.message });
      }
};
