const fs = require('fs');

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.options('*', cors());

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

app.get('/api/plans',(req,res)=>{
    try {
      const data = fs.readFileSync(`${__dirname}/constants/plans.json`, 'utf8')
      const formattedData = JSON.parse(data);
      res.json(formattedData)
    }catch (err) {
      res.status(500).send('Something broke!');
    }

})

app.get('/api/plans/:id',(req,res)=>{
  try {
    const data = fs.readFileSync(`${__dirname}/constants/plans.json`, 'utf8')
    const formattedData = JSON.parse(data);
    const requestPlans = formattedData.filter(plan => plan.userId === Number(req.params.id))
    res.json(requestPlans)
  }catch (err) {
    res.status(500).send('Something broke!');
  }
})

app.post('/api/plan/',(req,res)=>{
  try {
    const data = fs.readFileSync(`${__dirname}/constants/plans.json`, 'utf8')
    const newData = JSON.parse(data)
    newData.push(req.body)
   
    fs.writeFile(`${__dirname}/constants/plans.json`, JSON.stringify(newData),(err)=>{
      !err ? res.status(200).send('Create new plan') : res.send(err)
    })
  
  }catch (err) {
    res.status(500).send('Something broke!');
  }

})
app.delete('/api/plan/:id',(req,res)=>{
  try {
    const data = fs.readFileSync(`${__dirname}/constants/plans.json`, 'utf8')
    const parsingData = JSON.parse(data)
    const newData = parsingData.filter(plann => req.params.id !== plann.id)
   
    fs.writeFile(`${__dirname}/constants/plans.json`, JSON.stringify(newData),(err)=>{
      !err ? res.status(200).send('Delete plan') : res.send(err)
    })
  
  }catch (err) {
    res.status(500).send('Something broke!');
  }

})

app.post('/api/login', (req,res)=>{
  const { username, password } = req.body;
  try {
  const data = fs.readFileSync(`${__dirname}/constants/users.json`,'utf-8');
  const formattedData = JSON.parse(data);
  const requestUser = formattedData.find(user => user.username === username && user.password === password);
  requestUser === undefined ? res.status(404).send('User not found'):res.json(requestUser);
  }catch (err) {
    res.status(500).send('Something broke!');
  }
})



const port = 5000;

app.listen(port,()=> console.log(`Server start on port ${port}`))