const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const teamLogoSchema = new mongoose.Schema({
    logo_name: {
        type: String,
        required: true
    },
    logo_image: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("TeamLogo", teamLogoSchema);
