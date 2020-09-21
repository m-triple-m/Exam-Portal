const mongoose =require('../connection');
const Schema =mongoose.Schema;

const dbschema = new Schema({
    username: String,
    password: String,
    name : String,
    email: String,
    mobile : String,
    age : Number,
    
    
})

const model = mongoose.model('Users', dbschema);
module.exports=model;