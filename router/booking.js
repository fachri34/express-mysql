import express from 'express'
import { createBooking, getBooking, getAllBooking } from '../controller/bookingController.js'
// import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', createBooking)
router.get('/:id',  getBooking)
router.post('/',  getAllBooking)

export default router