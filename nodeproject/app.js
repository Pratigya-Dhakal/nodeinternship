// app.js
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create
app.post('/insert', (request, response) => {

});

//read
app.get('/getAll', (request, response) => {
  console.log('test');
});


//update




//delete

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
