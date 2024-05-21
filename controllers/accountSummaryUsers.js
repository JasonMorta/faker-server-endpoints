const {generatedUsers} = require('./generateUsers');

exports.accountSummaryUsers = async (req, res) => {
  console.log('processing request for accountSummaryUsers')

    console.log('Sending users to the client',  generatedUsers.length)
      res.json( generatedUsers);
      console.log('Request processed successfully!')
     
};
