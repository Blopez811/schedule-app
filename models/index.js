const User = require('./User');
const Department = require('./Department');
const Calendar = require('./Calendar')

Department.hasMany(User, {
    foreignKey: 'department_id'
});

User.belongsTo(Department, {
    foreignKey: 'department_id',
});

Calendar.belongsTo(Department, {
    foreignKey: 'department_id'
});

module.exports = { User, Department, Calendar };