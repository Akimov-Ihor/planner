const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());



app.get('/api/users', (req,res)=>{
  try {
    const data = fs.readFileSync(`${__dirname}/constants/users.json`, 'utf8')
    const formattedData = JSON.parse(data);
    res.json(formattedData);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
})


app.post('/api/users/:id', (req,res)=>{
  const data = fs.readFileSync(`${__dirname}/constants/users.json`,'utf-8')
  console.log(data[req.params])
  // console.log(req.params,req.query,req.body)
})



const port = 1337;

app.listen(port,()=> console.log(`Server start on port ${port}`))