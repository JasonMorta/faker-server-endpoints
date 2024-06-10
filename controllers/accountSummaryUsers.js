

exports.accountSummaryUsers = async (req, res) => {
  console.log('Headers:', req.headers);
  console.log('Method:', req.method);
  console.log('URL:', req.url);

  console.log('processing request for accountSummaryUsers')

  const { generatedUsers } = require('./generateUsers');

  console.log('Sending users to the client', generatedUsers.length)

  res.json(generatedUsers);

  console.log('Request processed successfully!')

};
