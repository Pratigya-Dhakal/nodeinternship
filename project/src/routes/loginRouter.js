const express = require('express');
const path = require('path'); 
const loginRouter = express.Router();
const loginController = require('../controllers/loginController');

loginRouter.get('/login', (req, res) => {
    const viewPath = path.join(__dirname, '../../views/pages/login.ejs');
    res.render(viewPath, {});

});

loginRouter.post('/login', loginController.loginUser);

module.exports = loginRouter;
