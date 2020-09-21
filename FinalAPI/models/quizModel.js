const mongoose =require('../connection');
const Schema =mongoose.Schema;

const dbschema = new Schema({
    user : {type:mongoose.Types.ObjectId,ref:"Users"},
    title : String,
    desc: String,
    subject : String,
    QandA : Object,
    
    
})

const model = mongoose.model('Papers', dbschema);
module.exports=model; 