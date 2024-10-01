

import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const upload = (req, res) => {
    // 'file' is the name attribute in the form
    const uploadedFile = req.files.file;

    // Set upload path
    const uploadPath = path.join(__dirname, '../../uploads', Date.now() + "-" + uploadedFile.name);

    // Use the mv() method to place the file on the server

    //! for single file upload 
    uploadedFile.mv(uploadPath, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error occurred while uploading the file.');
        }

        res.send('File uploaded successfully!');
    });

    //! upload multiple images
    // let files = req.files.file
    // for (let i = 0; i < files.length; i++) {
    //     const uploadPath = path.join(__dirname, '../../uploads', Date.now() + "-" + files[i].name);
    //     files[i].mv(uploadPath, (err) => {
    //         if (err) {
    //             console.error(err);
    //             return res.status(500).send('Error occurred while uploading the file.');
    //         }
    //     });
    // }
    // res.send('File uploaded successfully!');

}