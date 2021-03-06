const db = require("../db/reports.js");

const reports = {
	
	getAllReports: function(res, id, status=200) {
		db.all("SELECT " + reports.dataFields + " FROM reports WHERE id =?",
			id, (err, rows) => {
				if (err) {
					return reports.errorResponse(res, "/reports", err);
				}

				res.status(status).json( { data: rows } );
			});
	},

	getReport: function(res, reportId, status=200) {
        if (Number.isInteger(parseInt(reportId))) {
            db.get("SELECT text from reports WHERE id = ?",
                reportId,
                function(err, row) {
                    if (err) {
                        return reports.errorResponse(res, "/reports/:id", err);
                    }

                    res.status(status).json( { data: row } );
                });
        } else {
            res.status(400).json({
                errors: {
                    status: 400,
                    detail: "Required attribute reportId " +
                        " is not an integer."
                }
            });
        }
    },

};

module.exports = reports;

	
