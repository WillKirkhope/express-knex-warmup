const express = require ('express')
const bodyParser = require ('body-parser')
const cors = require ('cors')
const queries = require('./queries')
const app = express()

const port = parseInt(process.env.port) || 3000;



app.use(bodyParser.json())
app.use(cors())


app.get('/', function(request,response){
  queries.listAll().then(cohort => {
        response.json({cohort})
})
})

app.get('/:id', function(request,response){
  queries.readOne(request.params.id).then(student => {
      student
          ? response.json({student})
          : response.status(404).json({message: 'Not found'})
  })
})



app.use(function(error,request,response,next){
  console.error(error.stack)
  response.status(400).send('ERROR ERROR ERROR')
})

app.listen(port, () => console.log('Listening on http://localhost:3000'))

module.exports = app;
