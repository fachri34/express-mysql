import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Review = db.define('review', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reviewText: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 5
        }
    },
    tourId: {
        type: DataTypes.INTEGER,
        references: {
            tableName: 'tour',
            key: 'id'
        }
    }
}, {
    freezeTableName: true
});


export default Review;



