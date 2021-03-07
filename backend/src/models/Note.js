import {Schema, model} from 'mongoose';

const noteSchema = new Schema({
    title:String,
    content:{
        required:true,
        type:String
    },
    author: String
},{
    versionKey:false,
    timestamps:true
})

export default model('Note', noteSchema);