import { Router } from 'express';
import multer from 'multer';
import upload from '../middlewares/upload';

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

export default router;