const Thermostat = require("../models/thermostats");

const multer = require('multer')



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads');
    },
  filename: function (req, file, cb) {

      cb(null, file.originalname);
  }
});

const uploadImg = multer({storage: storage}).single('image');





// newThermostats function for post tea route
const newThermostats = (req, res, next) => {



  postThermostats = new Thermostat ({
    hot: 0,
    not: 0,
    image: req.file.path
  })
  

  postThermostats.save((err,data)=>{

    if(err) return res.json({Error: err})
    return res.json(data)
  })


};

module.exports = {newThermostats, uploadImg};
