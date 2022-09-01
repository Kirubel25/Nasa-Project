const express = require('express')
const cors = require('cors')
const PlannetsRouter = require('./routes/plannets/plannet.router')
const app = express();

app.use(cors())
app.use(express.json({
    origin: "http://localhost:3001/"
}))
app.use(PlannetsRouter)

module.exports = app;