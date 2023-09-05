const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') // specify the destination folder for the uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname) // generate a unique filename for each uploaded file
    }
  });


  
const upload = multer({ storage: storage });
module.exports = upload;
