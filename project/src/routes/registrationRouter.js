// src/routes/registrationRouter.js

const express = require('express');
const path = require('path'); 
const registrationRouter = express.Router();
const registrationController = require('../controllers/registrationController');

registrationRouter.get('/', (req, res) => {
    const viewPath = path.join(__dirname, '../../views/pages/registration.ejs');
    res.render(viewPath, {});
});

registrationRouter.post('/registration', registrationController.registerUser);

module.exports = registrationRouter;
