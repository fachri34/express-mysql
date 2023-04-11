import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controller/userController.js'


const router = express.Router()
// import { verifyUser, verifyAdmin } from '../utils/verifyToken.js'

router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getSingleUser)
router.get("/",  getAllUser)

export default router