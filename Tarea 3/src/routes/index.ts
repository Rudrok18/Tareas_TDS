import { Router } from 'express';
import multer from 'multer';
import upload from '../middlewares/upload';
import path from 'path';
import fs from 'fs';

const router = Router();

router.get('', (req, res) => {
    res.send('api works');
})

router.post('/uploads', upload.array('docs'), (req, res) => {
    
    const files = req.files as Express.Multer.File[];

    console.log('Doc: ', req.file);

    if (req.files && req.files.length) {
        const docsInfo = files.map((file: { originalname: any; size: any; }) => ({
            name: file.originalname,
            size: file.size
        }));

        res.send({
            message: 'Docs sent succesfully',
            files: docsInfo
        });
    } else {
        res.sendStatus(400).send('File not supported')
    }
})

router.get('/download', (req, res) => {
    const fileName = req.query.file as string;
    const filePath = path.join(__dirname, '../../documents', fileName);

    fs.stat(filePath, (err) => {
        if (err) {
            return res.status(404).send('File not found');
        }

        res.download(filePath, (err) => {
            if (err) {
                return res.status(500).send('Error downloading file');
            }
        });
    });
});

export default router;