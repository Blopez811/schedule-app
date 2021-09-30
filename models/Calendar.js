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
    event_name: {
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
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'calendar'
}
);

module.exports = Calendar;