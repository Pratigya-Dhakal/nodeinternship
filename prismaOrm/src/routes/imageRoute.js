import express from 'express';
import {
    uploadImage,
    updateImage,
    deleteImage,
} from '../controller/imageController.js';

const router = express.Router();

router.post('/upload', uploadImage);
router.delete('/delete/:id',  deleteImage,);
router.put('/update/:id', updateImage);
export default router;
