import Tour from '../model/Tour.js'
import { Op } from 'sequelize';

export const createTour = async (req, res) => {

    try {
        const savedTour = await Tour.create(req.body)
        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedTour
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create, Try again!"
        })
    }
}

export const updateTour = async (req, res) => {
    const id = req.params.id

    try {
        const updatedTour = await Tour.update(req.body, {
            where: { id: id }
        });
        const updateTour = await Tour.findByPk(id)

        if (updatedTour == 1) {
            res.status(200).json({
                success: true,
                message: "Tour updated successfully!",
                data: updateTour
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Tour not found",
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update tour, Try again!",
        });
    }
}

export const deleteTour = async (req, res) => {
    const id = req.params.id

    try {
        await Tour.destroy({ where: { id: id } });
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

export const getSingleTour = async (req, res) => {
    const id = req.params.id

    try {
        const tour = await Tour.findByPk(id)
        res.status(200).json({
            success: true,
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

export const getAllTour = async (req, res) => {
    try {
        const tours = await Tour.findAll({
            include: 'reviews'
        })
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successfull",
            data: tours
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Not Found',
        })
    }
}


export const getTourBySearch = async (req, res) => {
    const city = req.query.city;
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);
  
    try {
      const tours = await Tour.findAll({
        where: {
          [Op.and]: [
            { city: { [Op.like]: `%${city}%` } },
            { distance: { [Op.gte]: distance } },
            { maxGroupSize: { [Op.gte]: maxGroupSize } },
          ],
        },
        include: "reviews",
      });
  
      if (tours.length > 0) {
        res.status(200).json({
          success: true,
          count: tours.length,
          message: "Successful",
          data: tours,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Not Found!",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  

export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.findAll({
            where: {
                featured: true
            },
            limit: 8,
            include: 'reviews'
        });

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


export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.count()

        res.status(200).json({
            success: true,
            data: tourCount
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch tour count."
        })
    }
}
 
