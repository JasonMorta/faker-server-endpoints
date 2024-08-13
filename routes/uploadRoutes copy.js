
module.exports = (app) => {
    const u = require('../controllers/uploadController');
console.log('uploadRoutes Route hit🎯')
    // routes/uploadRoutes.js
    const multer = require('multer');

    // Configure multer for file uploads
    // diskStorage is one of the two storage engines that multer supports
    const storage = multer.diskStorage({
        // destination is the directory where the uploaded files are stored
        destination: (req, file, cb) => {
            console.log('req', req)

            // cb(param 1 handles errors, param 2 is the path to the directory)
            cb(null, 'uploads'); // cb( sort for callback)
        },

        // filename is the name of the file that is uploaded
        filename: (req, file, cb) => {
            console.log('file', file)
            cb(null, `${Date.now()} - ${file.originalname}`);
        },
    });


    //storage contains all the configuration for the file uploads
    const uploader = multer({ storage: storage });


    
    // single() is used when a single file is uploaded
    // 'avatar' is the name of the file input field in the form
    /* Other options include .array() and .fields() for multiple files:
    [
     .fields() is used when multiple files are uploaded and each file is associated with a different key in the request body.
     e.g: [ { name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 } ]
    ] 

    .array() is used when multiple files are uploaded and all files are associated with the same key in the request body.
    e.g: .array('photos', 12) // 12 is the maximum number of files that can be uploaded
     
    */
    app.post('/imgupload', uploader.single('imgKey'), u.uploadController);
}