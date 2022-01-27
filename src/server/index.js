var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')

dotenv.config()

const app = express()

const projectData = {}
const apiKey = {key: process.env.API_KEY}


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('client'))

app.get('/all', (req, res) => {
    res.send(projectData)
}) 

app.get('/key', (req,res) => {
    res.send(apiKey)
})


// Post Route
app.post('/checkUrl', urlCheck)

function urlCheck(req,res){
    projectData['agreement'] = req.body.agreement
    projectData['subjectivity'] = req.body.subjectivity
    projectData['confidence'] = req.body.confidence
    projectData['irony'] = req.body.irony
    projectData['score_tag'] = req.body.score_tag
}


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})