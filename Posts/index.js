const express = require('express')
const {randomBytes} = require('crypto')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())
const posts = {}

app.post('/posts', (req,res)=>{
    const id = randomBytes(4).toString()
    const {title} = req.body
    posts[id] ={
        id,
        title
    }

      res.status(201).send(posts[id]);
});


app.listen(4200, () => {
  console.log('v20')
  console.log('Listening on 4200');
});