const express = require('express')
const axios= require('axios')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/posts')
app.post('/events', (req,res)=> {

    const {type, data} = req.body; 
   if (type === 'PostCreated') {
       const {id, title } = data
       posts[id] = {id,title, content :[]}
   }
     if (type === 'CommentCreated') {
       const {id, title, postId } = data

       const post = posts[postId]
       posts.comments.push({id,content})
   }
console.log(posts);
   res.send({

   })
})



app.listen(4004,()=>{

    console.log('Listening on port 4004')
})