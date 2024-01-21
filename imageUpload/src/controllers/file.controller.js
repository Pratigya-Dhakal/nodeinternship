const { PrismaClient } = require('@prisma/client');
const cloudinary = require('cloudinary').v2;
const { Readable } = require('stream'); // Import Readable class from stream module

const prisma = new PrismaClient();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFile = async (req, res) => {
    try {
        console.log('Received file:', req.file);

        const file = req.file;

        if (!file || !file.buffer) {
            console.error('No file or buffer found.');
            return res.status(400).json({ success: false, message: 'No file or buffer found.' });
        }

        // Upload the image to Cloudinary using stream
        const cloudinaryUploadStream = cloudinary.uploader.upload_stream(
            { public_id: 'desired_public_id', resource_type: 'auto' },
            async (error, result) => {
                if (error) {
                    console.error('Error uploading to Cloudinary:', error);
                    return res.status(500).json({ success: false, message: 'Internal Server Error' });
                }

                console.log('Cloudinary result:', result);

                // Update the database with the Cloudinary URL
                const createdFile = await prisma.fileUpload.create({
                    data: {
                        name: file.originalname,
                        size: file.size,
                        type: file.mimetype,
                        path: result.secure_url,
                        cloudinaryUrl: result.secure_url,
                    },
                });

                console.log('File uploaded successfully:', createdFile);

                res.json({
                    success: true,
                    message: 'File uploaded successfully!',
                    fileId: createdFile.id,
                });
            }
        );

        // Pipe the buffer to Cloudinary upload stream
        const bufferStream = new Readable();
        bufferStream.push(file.buffer);
        bufferStream.push(null); // End the stream

        bufferStream.pipe(cloudinaryUploadStream);
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = {
    uploadFile,
};
