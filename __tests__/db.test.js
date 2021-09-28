const { test, expect } = require('@jest/globals');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Department = require('../models/Department');
const User = require('../models/User');

test('Department id is an integer and Department title is a string', () => {
    const policeDepartment = new Department(1, 'Georgetown Police Dept')
    
    expect('id').toBe(INTEGER);
    expect('title').toBe(STRING);
})