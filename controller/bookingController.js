import Booking from '../model/Booking.js'

export const createBooking = async (req, res) => {

    try {
        const newBooking = await Booking.create(req.body)
        res.status(200).json({
            success: true,
            message: "Your tour is booked",
            data: newBooking
        })

    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

export const getBooking = async(req,res) => {
    const id = req.params.id

    try {
        const book = await Booking.findByPk(id)
        res.status(200).json({
            success: true,
            message: "Suceessful",
            data: book
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not Found",
           })
    }
}


export const getAllBooking = async(req,res) => {
    try {
        const books = await Booking.findAll()
        res.status(200).json({
            success: true,
            message: "Suceessful",
            data: books
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
           })
    }
}
