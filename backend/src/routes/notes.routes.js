import {Router} from 'express'
import {findNotes,createNote,findNote,updateNote,deleteNote} from '../controllers/controller.notes'
const router = Router();

router.route('/')
    .get(findNotes)
    .post(createNote)
router.route('/:id')
    .get(findNote)
    .put(updateNote)
    .delete(deleteNote)
    
export default router