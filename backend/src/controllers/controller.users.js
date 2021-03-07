import User from '../models/User'

export const findUsers = async(req,res) =>{
    try {
        const findUsers = await User.find()
        res.json(findUsers)
    } catch (error) {
        console.log(error)
    }
}

export const createUser = async(req,res) =>{
    try {
        const newUser = new User({username: req.body.username})
        await newUser.save()
        res.json({message:"new user has created"})
    } catch (error) {
       console.log(error) 
    }
}

export const findUser = async(req,res) =>{
    try {
        const {id} = req.params
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async(req,res) =>{
    try{
        const {id} = req.params
        await User.findByIdAndDelete(id)
        res.json({message:"eliminado"})
    }catch(error){
        console.log(error)
    }
}

export const updateUser = async(req,res)=>{
    try {
        await User.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"actualizado usuario"})
    } catch (error) {
        
    }
}