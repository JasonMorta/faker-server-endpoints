

exports.uploadController = async (req, res ) => {
  
    // // controllers/uploadController.js
    // const path = require('path');
    // const fs = require('fs');

    // // Create uploads directory if it doesn't exist
    // const uploadDir = path.join(__dirname, '../uploads');
    // if (!fs.existsSync(uploadDir)) {
    //     fs.mkdirSync(uploadDir, { recursive: true });
    // }

    // if (!req.file) {
    //     return res.status(400).json({ message: 'No file uploaded' });
    // }

    console.log('file📁', req.file);

    // if (err.code === 'LIMIT_FIELD_KEY') {
    //     // Handle field name size error
    //     return res.status(400).json({ error: 'Field name is too long. Maximum allowed size is 5 characters.' });
    // } else {
    
    // }


    res.status(200).json({
        message: 'Upload success!',
        filename: req.file,
    });
 

};
