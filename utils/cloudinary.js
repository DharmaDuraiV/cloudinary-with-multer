const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "colud",
    // format: async (req, file) => "jpg", // supports promises as well
    format: async (req, file) => file.mimetype.split("/")[1],
    public_id: (req, file) => Date.now() + "_" + file.originalname,
  },
});

const uploads = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = uploads;
