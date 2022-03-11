const { ObjectId } = require('mongodb');
const Database = require('./database.js');

class BaseModel {
    
    collection;

    constructor(collectionName) {
        this.collection = Database.selectCollection(collectionName);
    }

    getAll() {
        return new Promise ((accept, reject) => {
            this.collection.find({}).toArray((err, result) => {
                if(err){
                    console.log('Error al consultar: ', err);
                    reject(err);
                }else{
                    console.log('Resultados: ', result);
                    accept(result);
                }
            });
        });
    } 

    getOne(id) {
        return this.collection.findOne({
                _id: ObjectId(id),
            });
    }
}

module.exports = BaseModel;