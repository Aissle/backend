const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const MongodbLink = require('./secretes')
const mongoConnect = callback => {
    MongoClient.connect(
        MongodbLink
    )
        .then(client => {
            console.log('connected!');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = mongoConnect;


// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//file.env -> link
//terminat -> echo ".env" >> .gitignore