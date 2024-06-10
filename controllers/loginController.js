





exports.loginController = async (req, res) => {

      const request = await req
      const email = req.body.email;
      const password = req.body.password;

      try {

      if (email !== 'admin' || password !== 'admin') {
            //Authenticating the user
            res.status(401).json('Invalid Login Credentials');
       
      } else if (email === 'admin' && password === 'admin') {
            res.status(200).json('Logged In');
      }

      
         
          
      } catch (error) {
            console.log('error', error)
            res.status(500).send({error});
      }
};
