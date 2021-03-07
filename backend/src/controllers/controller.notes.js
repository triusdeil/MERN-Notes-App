import Note from '../models/Note'

export const findNotes = async (req,res) =>{
    try {
        const findNotes = await Note.find()
        res.json(findNotes)
    } catch (error) {
        console.log(error)
    }
}

export const createNote = async (req,res) =>{
    try {
        const newNote = new Note({title:req.body.title, content:req.body.content, author:req.body.author})
        await newNote.save()
        res.json({message:'Note is created'})
    } catch (error) {
        console.log(error)
    }
}

export const findNote = async (req,res) =>{
    try {
        const {id} = req.params
        const note = await Note.findById(id)
        res.json(note)
    } catch (error) {
        console.log(error)
    }
}

export const updateNote = async(req,res)=>{
    try {
        await Note.findByIdAndUpdate(req.params.id,req.body)
        res.json({message: "Notes was update succesfully"})
    } catch (error) {
        console.log(error)
    }
}

export const deleteNote = async(req,res)=>{
    try {
        const {id} = req.params
        await Note.findByIdAndDelete(id)
        res.json({message:"Note were deleted succesfully"})
    } catch (error) {
        console.log(error)
    }
}