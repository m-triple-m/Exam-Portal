const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    paper : {type : mongoose.Types.ObjectId , ref : 'QuestionForms'},
    name : String,
    roll_no : String,
    solved_paper : Object,
    created : String
})

const model = mongoose.model('Responses', schema);

module.exports = model;