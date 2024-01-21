const express = require('express');
const fileController = require('../controllers/file.controller');
const upload = require('../configuration/multer.config');

const router = express.Router();

router.post('/upload', upload.single('file'), fileController.uploadFile);

module.exports = router;
