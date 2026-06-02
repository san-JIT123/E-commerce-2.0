import multer from "multer";

const storageInstance = multer.memoryStorage();

const upload = multer({ storageInstance });

export default upload;
