const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const teamSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true,
        unique: true
    },
    team_logo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TeamLogo',
        required: true
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account'
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("Team", teamSchema);
