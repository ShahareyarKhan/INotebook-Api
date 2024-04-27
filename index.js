// Connect to mongodb database. 
require('dotenv').config();
const connectToMongo=require('./db');
const express = require('express')
const app = express()
const port =5000;
var cors = require('cors')
app.use(cors())
app.use(express.json())
connectToMongo()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log(`Example are listening at http://localhost:${port}`)
})