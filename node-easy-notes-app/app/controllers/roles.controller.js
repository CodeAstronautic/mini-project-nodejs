const Roles = require("../models/roles.model");
const config = require("../../config/database.config");
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send("Greetings from the Roles controller!");
};

exports.createRole = (req, res) => {
    let roles = new Roles({
      
        name: req.body.name,
        description: req.body.description,
        editable: req.body.editable,
        permissions: req.body.permissions,
        date_created: new Date()
    });

    roles.save(function (err, role) {
        if (err) {
            res.json({
                status: false,
                statusCode: 404,
                message: "Role not created successfully",
                error: err
            });
        }
        res.json({
            status: true,
            statusCode: 200,
            message: "Role created successfully",
            data: role
        });
    });
};

exports.getallRole = (req, res) => {
    Roles.find({workspace_id: req.params.workspaceId}, (err, role) => {
        if (err) {
            res.json({
                status: false,
                statusCode: 404,
                message: "Role not get successfully",
                error: err
            });
        }
        res.json({
            status: true,
            statusCode: 200,
            message: "Role get successfully",
            data: role
        });
    });
};

exports.getRole = (req, res) => {
    Roles.findById(req.params.id, (err, role) => {
        if (err) {
            res.json({
                status: false,
                statusCode: 404,
                message: "Role not get successfully",
                error: err
            });
        }
        res.json({
            status: true,
            statusCode: 200,
            message: "Role get successfully",
            data: role
        });
    });
};

exports.updateRole = (req, res) => {
    var updatedate = req.body;
    updatedate.date_updated = new Date();
    Roles.findByIdAndUpdate(
        req.params.id,
    
        {$set: req.body},
        {new: true},
        (err, role) => {
            if (err) {
                res.json({
                    status: false,
                    statusCode: 404,
                    message: "Role not update successfully",
                    error: err
                });
            }
            res.json({
                status: true,
                statusCode: 200,
                message: "Role update successfully",
                data: role
            });
        }
    );
};

exports.deleteRole = function (req, res) {
    Roles.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.json({
                status: false,
                statusCode: 404,
                message: "Role not delete successfully",
                error: err
            });
        }
        res.json({
            status: true,
            statusCode: 200,
            message: "Role delete successfully"
        });
    });
};
