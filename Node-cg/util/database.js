const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect(
        // 'mongodb+srv://jane:jane123@cluster0.18p7zv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        'mongodb+srv://jane:jane123@cluster0.18p7zv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

    )
        .then(result => {
            console.log('connected!');
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = mongoConnect;


