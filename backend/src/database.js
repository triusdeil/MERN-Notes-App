import mongoose from 'mongoose'
import {config} from "dotenv"
(async() =>{
    try {
        const db = await mongoose.connect('mongodb://localhost/Notesapp' ,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        console.log('db is connected', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()