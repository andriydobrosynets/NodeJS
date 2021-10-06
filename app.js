const express = require('express');

const  {userRouter}  = require('./router');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
    console.log('app listen 5000');
});

app.use('/users', userRouter);
