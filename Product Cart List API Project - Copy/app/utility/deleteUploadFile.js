import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const deleteUploadFile = (req, res) => {
    const filename = req.params.fileName;
    const filePath = path.join(__dirname, '../../uploads', filename);
    fs.unlink(filePath, (err) => {
        if (err) {
            res.status(500).send('Error Deleting File');
        } else {
            res.send('File deleted successfully');
        }
    })

}