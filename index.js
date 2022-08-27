const express = require ('express');
const routes = require('./routes/thermostats'); // import the routes


require('dotenv').config();


const mongoose = require('mongoose')


const helmet = require('helmet');

const compression = require('compression');

const app = express();

app.use(compression())

app.use(helmet());


app.use(express.json());

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})

app.use('/uploads', express.static('./uploads'));


 //establish connection to database
 mongoose.connect(
    process.env.MONGODB_URI,
     {  useUnifiedTopology: true, 
        useNewUrlParser: true,
    },
     (err) => {
         if (err) return console.log("Error: ", err);
         console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
     }
 );
 
