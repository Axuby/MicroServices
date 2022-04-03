const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});




app.post('/posts/:id/togets', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content,status:'pending' });

  commentsByPostId[req.params.id] = comments

  await axios.post('http://event-bus-srv:4005/events',{
    type:" comments updated",
    data:{
      id: commentId,
       content,
       postId: req.params.id,
       status:'pending'
    }
  })

  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});