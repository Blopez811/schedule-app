const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection');

class Department extends Model {
    //not sure what is needed here
}

Department.init({
    id: {
        type: DataTypes.INTEGER,
    }
})

module.exports = Department