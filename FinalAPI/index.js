const express = require('express');  //import express
const app = express(); //initialize app
const port =3000;
const userRouter =require('./routes/userManager');
const quesRouter = require('./routes/quizManager');
const cors = require('cors');
const parser =require('body-parser');
const server = require('http').Server(app);
const responseRouter = require('./routes/answerManager');

app.use(parser.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/quesform',quesRouter);
app.use('/answer',responseRouter);


server.listen(port, () => {
    console.log('server started..');
})