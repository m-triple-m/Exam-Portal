const mongoose=require('mongoose')
const conn_url='mongodb://localhost:27017/myNewdb';
mongoose.connect(conn_url,{useNewUrlParser: true,useUnifiedTopology: true})
.then(() => {
    console.log('Database successfully connected')
})
.catch((err) => {
    console.error(err)
})

module.exports =mongoose;