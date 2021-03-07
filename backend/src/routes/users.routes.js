import {Router} from 'express'
import{createUser,deleteUser,findUser,findUsers,updateUser} from '../controllers/controller.users'
const router = Router();

router.route('/')
    .get(findUsers)
    .post(createUser)

router.route('/:id')
    .get(findUser)
    .put(updateUser)
    .delete(deleteUser)

export default router