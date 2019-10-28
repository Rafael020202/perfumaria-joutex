const {MongoClient} = require('mongodb');

const urlConnection = 'mongodb://127.0.0.1:27017';
const getConnection = (callback) => {
    MongoClient.connect(urlConnection, {useNewUrlParser: true} ,(err, res) => {
        if(err)
            return callback(err, undefined)
        
        const db = res.db('perfumes-collection');
        callback(undefined, db);


    });
};

module.exports = getConnection;