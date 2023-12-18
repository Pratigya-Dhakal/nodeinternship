const express = require('express');
const path = require('path'); 
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', (req, res) => {
    const viewPath = path.join(__dirname, '../../views/pages/login.ejs');
    res.render(viewPath, {});

});

router.post('/login', loginController.loginUser);

module.exports = router;
