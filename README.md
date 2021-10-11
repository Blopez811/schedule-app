# Book 'Em
  
  
  ## Table of Contents
  * [Description](https://github.com/Blopez811/schedule-app#description)
  * [Installation](https://github.com/Blopez811/schedule-app#installation)
  * [Usage](https://github.com/Blopez811/schedule-app#usage)
  * [License](https://github.com/Blopez811/schedule-app#license)
  * [Contributing](https://github.com/Blopez811/schedule-app#contributing)
  * [Technologies Used](https://github.com/Blopez811/schedule-app#technologies-used)
  * [Tests](https://github.com/Blopez811/schedule-app#tests)
  * [Questions](https://github.com/Blopez811/schedule-app#questions)

  ## Description
   This is a scheduler application for rural law enforcement to help them keep track of their patrol schedules. Officers can create and view their shift schedules in addition to any other pertinent information specific to them such as meetings, assignments, or notes for the day. The calendar for the department can only be accessed once the user has entered valid credentials.

  ## Installation
    No installation needed, simply go to the deployed webpage at https://warm-journey-96239.herokuapp.com/login/ and login to gain access to the user's calendar. For testing purposes the user name "testuser1" with the password "testuser1" will allow access to an example calendar.

  ## Usage
    Login with your username "testuser1" and password "testuser1" at the deployed site to access the calendar. Click on any day of the week to see if there are events for the day displayed on the sidebar the left side of the screen. To create a new event click on the "add shift" button on the left sidebar and fill out the event name, the date, and the notes you would like to display for the day. The last row in the modal is for the department id of the event. For testing purposes enter the number 1 in this field to refer to a current department in the database. If you place a number to a department that does not exist or a non integer value you will receive a server error when you try to save. A more user friendly field is planned to be added in our future development.

  ## License  
    This application is not covered under a specific license at this time.
  ## Contributing
    We are currently not accepting public contributions for this project. This project currently has four contributors; Benicio Lopez, Alex Cooney, Matt Luna, and Rio Costanzo.

  ## Technologies Used
    Javascript, node.js, handlebars, CSS, sequelize, express, express-sessions, connect-session-sequelize, dotenv, mysl2, jest, bcrypt, bootstrap, new technology to us; "font-awesome", and jQuery. 

  ## Tests
    We have a test on a feature branch for this project to test if the output is an integer as it should be. The test is run by running npm install on the terminal and then running npm run test to have the test fire. We are using Jest for testing, and more tests are being worked on and will be added in the future.

  ## Questions
  Click here to see Blopez811's page! https://github.com/Blopez811  
  Have any questions? Feel free to email me at benicio.lopez@gmail.com and I will gladly answer you as soon as I can!