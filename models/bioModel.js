const mongoose = require("mongoose");

const bioSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  adress: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Bio = (module.exports = mongoose.model("bio", bioSchema));

module.exports.get = function (callback, limit) {
  Bio.find(callback).limit(limit);
};
