const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const fileRoutes = require('./src/routes/file.route');


const app = express();
const port = process.env.PORT ;

app.use(bodyParser.json());
app.use('/api', fileRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
