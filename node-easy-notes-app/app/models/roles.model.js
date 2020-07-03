const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let roleSchema = new Schema({
  
  name: { type: String, required: true, unique: false },
  description: { type: String },
  editable: { type: Boolean, default: true },
  permissions: { type: [String], required: true }, 
  isActive: { type: Number, default: 1 },
  isArchived: { type: Boolean, default: true },
  date_created: { type: Date },
  date_updated: { type: Date, default: Date.now }
});

// Export the model
module.exports = mongoose.model("roles", roleSchema);
