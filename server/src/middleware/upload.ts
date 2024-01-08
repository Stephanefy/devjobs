import { promisify } from "util";  
import Multer from "multer";

export const singleTonMulter = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 25 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
  });