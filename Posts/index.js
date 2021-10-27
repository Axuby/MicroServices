const express = require('express')
const {randomBytes} = require('crypto')
const app = express()

const posts = {}

app.post('/posts', (req,res)=>{
    const id = randomBytes(4).toString()
    const {title} = req.body
    posts[id] ={
        id,
        title
    }
})
