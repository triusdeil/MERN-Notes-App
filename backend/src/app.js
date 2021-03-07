import express from 'express'
import {config} from 'dotenv'
import usersRoutes from './routes/users.routes';
import notesRoutes from './routes/notes.routes'
//Initialization
const app = express()

//Settings
app.set('port', config.PORT || 4000)

//Middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//Routes
app.use('/api/users', usersRoutes)
app.use('/api/notes', notesRoutes)

module.exports = app