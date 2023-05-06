import Tour from "../model/Tour.js";
import Review from "../model/Review.js";

export const createReview = async(req, res) => {
    const tourId = req.params.tourId
    console.log(tourId)
    const newReview = await Review.create({...req.body})

    try{
        const tour = await Tour.findOne({ where: { id: tourId } })
        await tour.addReview(newReview)

        res.status(200).json({
            success:true,
            message:"Review submitted", 
            data: newReview
        })
    } catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"failed to submit", 
        })
    }
}
