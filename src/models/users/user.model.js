const BaseModel = require('../../core/baseModel');
require('dotenv').config();

class User extends BaseModel{
    constructor(){
        super('users');
    }

    createUser(name, email, password, role) {
        if(this.getOneByEmail(email)) return Promise.reject({
            alreadyExists: 'User already exists with this email'
        });
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

    getOneByEmail(email){
        return this.collection.findOne({
            email: email,
        });
    }
}

module.exports = User;