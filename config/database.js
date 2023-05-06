import { Sequelize } from 'sequelize'

const db = new Sequelize('webtravel', 'root', '',{
    host: "localhost",
    dialect: "mysql"
})

export default db