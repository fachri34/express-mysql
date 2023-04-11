import Tour from '../model/Tour.js'

export const createTour = async (req, res) => {

    const newTour = new Tour(req.body)
    try {
        const savedTour = await newTour.save()
        res.status(200).json({
            success: true,
            message:"Successfully created",
            data: savedTour
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Failed to create, Try again!"
        })
    }
}

export const updateTour = async (req,res) => {
    const id = req.params.id

    try {
        const updatedTour = await Tour.findByIdAndUpdate(id,
            {$set: req.body},{new: true})
        res.status(200).json({
            success:true,
            message:"Message updated",
            data: updatedTour
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Failed to update, Try again!"
        })
    }
}

export const deleteTour = async (req,res) => {
    const id = req.params.id

    try {
        await Tour.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete"
        })
    }
}

export const getSingleTour = async (req,res) => {
    const id = req.params.id

    try {
        const tour = await Tour.findById(id)
        res.status(200).json({
            success:true,
            message: "Successful",
            data: tour
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not Found"
        })
    }
}

export const getAllTour = async(req,res) => {
    try {
        const tours = await Tour.findAll({}).populate('reviews')
        res.status(200).json({
            success: true,
            count:tours.length,
            message: "Successfull",
            data: tours
        })
    } catch (error) {
        
    }
}

export const getTourBySearch = async (req,res) => {
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {
        const tours = await Tour.findAll({
            city,
            distance: { $gte:distance },
            maxGroupSize: { $gte:maxGroupSize },
        }).populate("reviews")
        res.status(200).json({
            success:true,
            count: tours.length,
            message:"Successful",
            data: tours
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not Found!"
        })
    }
}

export const getFeaturedTour = async (req, res) => {

    try {
        const tours = await Tour.find({featured:true})
        .populate('reviews')
        .limit(8)

        res.status(200).json({
            success: true,
            message: "Successful",
            data: tours
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not Found",
        })
    }
}

export const getTourCount = async(req,res)=> {
    try{
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({
            success:true,
            data: tourCount
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "failed to fetch"
        })
    }
} 
