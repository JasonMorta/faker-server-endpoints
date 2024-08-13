
module.exports = (app) => {
    const u = require('../controllers/uploadController');

    const multer  = require('multer')

    // Configure multer for file uploads
    const storageConfig = multer.diskStorage({

        //? Configure the destination
        destination: function (req, file, cb) {
          cb(null, './public/uploads')
        },

        //? Configure the filename
        filename: function (req, file, cb) {
           
            // assign the original name of the file to the file
          cb(null, Date.now()+'-'+file.originalname )
        },

        //? Configure the file filter
        fileFilter: (req, file, cb) => {
            // if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {

            // To accept the file pass `true`:
            //   cb(null, true)
            // } else {

            // To reject this file pass `false`:
            //   cb(null, false)
            // }
          },

        //? Configure the limits
        limits: {
            // limits the file size to 5MB
          fileSize: 1024 * 1024 * 5, //? 5MB

          // limits the field name size to 5 characters
          fieldNameSize: 2,
        },

        //? Keep the full path of files instead of just the base name
        preservePath: false

      })

       //storage contains all the configuration for the file uploads
      const upload = multer({ storage: storageConfig })
   
 
 /* 
    upload.any() : Accepts all files that comes over the wire. An array of files will be stored in req.files.
    upload.single(fieldname) : Accept a single file with the name fieldname. The file will be stored in req.file.
    upload.array(fieldname[, maxCount]) : Accept an array of files, all with the name fieldname. Optionally error out if more than maxCount files are uploaded. The array of files will be stored in req.files.
    upload.fields(fields) : Accept a mix of files, specified by fields. An object with arrays of files will be stored in req.files.

 */

    app.post('/uploads',  upload.single('upload_file'), u.uploadController);
}