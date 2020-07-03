const Leads = require("../models/leads.model");
//const queryBuilder = require("../services/query_builder.service");
//const esService = require("../services/elasticsearch.service");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Leads controller!");
};

exports.createLead = (req, res) => {
  let leads = new Leads({
    status_id: req.body.status_id,
    status_label: req.body.status_label,
    display_name: req.body.display_name,
    addresses: req.body.addresses,
    
    name: req.body.name,
    html_url: req.body.html_url,
    created_by: req.body.created_by,
    url: req.body.url,
    projects: req.body.projects,
    updated_by: req.body.updated_by,
    description: req.body.description,
    date_created: new Date()
  });

  leads.save(function(err, lead) {
    if (err) {
      res.json({
        status: false,
        statusCode: 404,
        message: "Lead not created successfully",
        error: err
      });
    }
    res.json({
      status: true,
      statusCode: 200,
      message: "Lead created successfully",
      data: lead
    });
  });
};

exports.getLeads = (req, res) => {
 // const workspaceId = req.query.workspace_id;
  const textQuery = req.query.query;
  const _skip = req.query._skip ? parseInt(req.query._skip) : 0;
  const _limit = req.query._limit ? parseInt(req.query._limit) : 10;
  const _fields = req.query._fields;

  searchLeads(req, res, textQuery, _skip, _limit, _fields);
};

exports.getLead = (req, res) => {
  Leads.findById(req.params.id, (err, lead) => {
    if (err) {
      res.json({
        status: false,
        statusCode: 404,
        message: "Lead not get successfully",
        error: err
      });
    } else {
      if (lead) {
        res.json({
          status: true,
          statusCode: 200,
          message: "Lead get successfully",
          data: lead
        });
      } else {
        res.json({
          status: false,
          statusCode: 401,
          message: "Lead not get with this leadId successfully",
          data: {}
        });
      }
    }
  });
};

exports.updateLead = (req, res) => {
  var updatedate = req.body;
  updatedate.date_updated = new Date();
  Leads.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (err, lead) => {
      if (err) {
        res.json({
          status: false,
          statusCode: 404,
          message: "Lead not update successfully",
          error: err
        });
      } else {
        res.json({
          status: true,
          statusCode: 200,
          message: "Lead update successfully",
          data: lead
        });
      }
    }
  );
};

exports.deleteLead = function(req, res) {
  Leads.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.json({
        status: false,
        statusCode: 404,
        message: "Lead not delete successfully",
        error: err
      });
    }
    res.json({
      status: true,
      statusCode: 200,
      message: "Lead delete successfully"
    });
  });
};

function searchLeads(req, res,textQuery, _skip, _limit, _fields) {
  let termFilterCondition = [];
  termFilterCondition.push({ field: "workspace_id", value: workspaceId });
  const searchBody = queryBuilder.buildSearchQuery(
    termFilterCondition,
    textQuery,
    _skip,
    _limit,
    _fields
  );

  esService.searchThenResponse(res, "leadss", searchBody, _limit);
}
