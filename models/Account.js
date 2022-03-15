const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    match: [/^[a-zA-Z0-9]+$/, 'is invalid']
  },
  player_no: {
    type: Number,
    required: true,
    unique: true
  },
  total_point: {
    type: Number,
    default: 0
  },
  cur_point: {
    type: Number,
    default: 0
  },
  skins: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skin'
    }
  ],
  country: {
    type: String,
    default: ''
  },
  os: {
    type: String,
    default: ''
  },
  mobile_type: {
    type: String,
    default: ''
  },
  referral: {
    type: Number,
    default: 0
  },
  account_type: {
    type: String,
    default: ''
  },
  team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
  },
  team_join_date: {
    type: Date,
    default: null
  },
  team_exit_date: {
    type: Date,
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model("Account", accountSchema);
