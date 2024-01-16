const express = require('express');
const bodyParser = require('body-parser');
const registrationRouter = require('./src/routes/registrationRouter');
const loginRouter = require('./src/routes/loginRouter');
const authenticateToken = require('./src/middleware/authenticateToken');


const app = express();
const PORT = 3003;

app.set('view engine', 'ejs');

app.use(express.static('assets'));
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('', (req, res) => {
res.render('pages/index');
});

app.use(registrationRouter);
app.use( loginRouter); 
app.get('/profile',authenticateToken, (req, res) => {
    res.send('This is the profile page');
});

app.listen(PORT, () => {

console.log(`Server is running on port ${PORT}`);
});
