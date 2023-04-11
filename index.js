import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import tourRoute from './router/tour.js'
import authRoute from './router/auth.js'
import userRoute from './router/user.js'
import bookingRoute from './router/booking.js'
import reviewRoute from './router/review.js'

dotenv.config()
const app = express()
const port = 9000
const corsOptions = {
    origin:true,
    credential:true
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/tour', tourRoute)
app.use('/api/user', userRoute)
app.use('/api/booking', bookingRoute)
app.use('/api/review', reviewRoute)

app.listen(port, () => {
    console.log("listening on port:", port)
})

