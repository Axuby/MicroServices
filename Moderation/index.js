const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());


app.post('/events',async (req,res)=> {

const {type, data} = req.body ;

if(type === 'commentCreated'){
    const status =  data.content.includes('pranges')? 'rejected':''

    await axios.post('http://event-bus-srv:4005/events',{
        type:'commentCreated',
        data: {
            id:data.id,
            postId:data.postId,
            content: data.content,
            status
        }
    })

    res.send({
    })
}

})

app.listen(4003,()=> 
console.log('Listening on 4003')
)