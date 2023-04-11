import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Booking = db.define('booking', {
    userId: DataTypes.STRING,
    userEmail: DataTypes.STRING,
    address: DataTypes.STRING,
    tourName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    guestSize: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Booking;
