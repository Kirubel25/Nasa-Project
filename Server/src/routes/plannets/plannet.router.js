const express = require('express')
const {getplannets} = require('./plannet.controller')
const getPlannetsRouter = express.Router()

getPlannetsRouter.get('/plannets', getplannets)