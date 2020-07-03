const mongoose = require("mongoose");
//const mongoosasticService = require("../services/mongoosastic.service");
const Schema = mongoose.Schema;

let leadSchema = new Schema(
  {
    //workspace_id: { type: Schema.ObjectId, ref: "workspaces", required: true },
    status_id: { type: String },
    status_label: { type: String },
    display_name: { type: String },
    name: { type: String },
    description: { type: String, default: "" },
    addresses: [
      {
        addresstype: { type: String },
        address: { type: String },
        address_cont: { type: String },
        city: { type: String },
        state_main: { type: String },
        zipcode: { type: String },
        country: { type: String },
        lat: { type: String },
        lng: { type: String }
      }
    ],
    html_url: { type: String },
    url: { type: String, default: null },
    projects: { type: [String] },
    created_by: { type: String, default: null },
    updated_by: { type: String },
    date_created: { type: Date },
    date_updated: { type: Date, default: Date.now },
    isActive: { type: Number, default: 1 }
  },
  { strict: false }
);

//mongoosasticService.register(leadSchema);

// Export the model
module.exports = mongoose.model("leads", leadSchema);
