import express from 'express';
import userRoutes from './src/routes/userRoutes.js'; 
import userRoutes from './src/routes/imageRoute.js'; 

const app = express();
const port = 4000;

app.use(express.json());
app.use( userRoutes);
// app.use(imageData);

app.listen(port, () => {
    console.log(`Server is started at ${port}`);
});
