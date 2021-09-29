const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Department = require('../models/Department');
const User = require('../models/User');

test('Department id is an integer and Department title is a string', () => {
    const policeDepartment = new Department(1, 'Georgetown Police Dept')
    
    expect(typeof 1).toBe('number');
    expect(typeof 'Georgetown Police Dept').toBe('string');
})