const express = require('express');
const app = express();
const router = express.Router();
const auth = require('./src/api/auth/auth.routes');
router.use('/auth', auth);
const users = require('./src/api/users/user.routes');
router.use('/users', users);
app.listen(5000,()=>{
    console.log(`Server is running in the port 5000`);
}) ; 