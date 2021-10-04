const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {
    //not sure what is needed here that makes Department different from the Model, will need to research
}

Department.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'department'
}
);

module.exports = Department;