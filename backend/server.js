require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


const app = express()


app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


app.use('/api/workouts', workoutRoutes)


mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected to database')
  
    app.listen(process.env.PORTRUNNIG, () => {
      console.log('listening for requests on port', process.env.PORTRUNNIG)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 