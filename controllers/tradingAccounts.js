

exports.tradingAccounts = async (req, res) => {
  //if places outside this function it will be called on application start, delaying the start time.
  const { generatedUsers } = require('./generateUsers');


  // Get the count from the query parameters, default to 1 if not provided
  const count = parseInt(req.params.count) || 50;
  console.log('count', count)


  res.json(generatedUsers(count));

  console.log('Request processed successfully!')

};
