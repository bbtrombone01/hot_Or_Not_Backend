const Thermostat = require("../models/thermostats");

const multer = require('multer');
const { db } = require("../models/thermostats");


const storage = multer.diskStorage({

  destination: function (req, file, cb) {
      cb(null, './uploads');
    },
  filename: function (req, file, cb) {

      cb(null, file.originalname);
  }
});

const uploadImg = multer({storage: storage}).single('image');


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


const getAllThermostats = (reg,res,next)=>{

  Thermostat.find({}, (err, data)=>{
    if(err){
      return res.json({error: err})
    }

    return res.json(randomizeThermoStats(data))

  })
}


// takes  the array of objects from getAllThermostats and returns an object 
// This object should have a key value pair for every index of the array.  

function randomizeThermoStats(array){

    let newObject = {}

    i = array.length

    for( i; i > 0; --i){

      let randomNumber = Math.floor(Math.random()*i)

      newObject[i] = array[randomNumber]

      // this removes indexs that have already been assigned to newObject, should only remove the single
      // randomNumber index in the array
      array.splice( randomNumber,1)

    }

    return newObject

}

//update Thermostats, needs uploads string for to align with db 

function updateThermostats (reg,res,next){



    Thermostat.findOneAndUpdate({image:`uploads/${reg.body.image}`}, 

    {hot: reg.body.hot, not: reg.body.not}, {new: true},


    (err,data)=>{

      if(err) return res.json({Error: err})

      return res.json(data)

    })

}

module.exports = {newThermostats, uploadImg, updateThermostats, getAllThermostats};
