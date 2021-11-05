const express = require('express')
const axios= require('axios')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.post('/events', (req,res)=> {

    const event = req.body;
    axios.post('hhtp://localhost:/4000/events',event)
     axios.post('hhtp://localhost:/4001/events',event)
      axios.post('hhtp://localhost:/4002/events',event)

      res.send({status: 'OK'})

})



app.listen(4005,()=>{

    console.log('Listening on port 4005')
})