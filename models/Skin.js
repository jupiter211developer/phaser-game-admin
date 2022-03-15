const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const skinSchema = new mongoose.Schema({
    skin_image: {
        type: String
    },
    skin_name: {
        type: String
    },
    score: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model("Skin", skinSchema);
