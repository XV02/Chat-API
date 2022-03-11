const BaseModel = require('../../core/baseModel');
require('dotenv').config();

class User extends BaseModel{
    constructor(){
        super('users');
    }

    createUser(name, email, password, role) {
        return this.collection.insertOne({
            name: name, 
            email: email, 
            password: password, 
            role: role
        });
    }

    signIn(name, password){
        return this.collection.findOne({
            name: name,
            password: password,
        });
    }
}

module.exports = User;