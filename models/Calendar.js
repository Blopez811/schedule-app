const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Calendar extends Model {
    //nothing currently needed
}

Calendar.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // department_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'department',
    //         key: 'id'
    //     },
    // }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'calendar'
}
);

module.exports = Calendar;