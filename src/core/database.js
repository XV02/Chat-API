const { MongoClient } = require('mongodb');
require('dotenv').config();

const mongoURL = process.env.MONGO_URL;

const Database = {
    dbInstance: null,
    connect: (callback) => {
        return new Promise((accept, reject) => {
            MongoClient.connect(mongoURL, {useUnifiedTopology: true}, (err, client) => {
                this.dbInstance = client.db();
                accept(client);
            });
        });
    },
    selectCollection: (collection) => {
        return this.dbInstance.collection(collection);
    }
}

module.exports = Database;