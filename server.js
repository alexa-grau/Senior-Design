const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

var con = mysql.createConnection({
	host	: 'water-database.cex69uznl7nj.us-west-1.rds.amazonaws.com',
	user	: 'admin',
	password: 'iLoveSeniorDesign2020',
	database: 'waterdb',
	multipleStatements: true,
});

con.connect((err) => {
	if (!err)
		console.log('DB connection successful');
	else
		console.log('DB connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
});

app.listen(3004, () => console.log('Express server is running at port #3004'));

//get all users
app.get('/users', (req, res) => {

	var sql = 'SELECT * FROM users';
	con.query(sql, (err, rows, fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});

//get one user
// how to call for certain user -> /users/phonenumber
app.get('/users/:phonenumber/:password', (req, res) => {
	console.log("get one user");
	var sql = 'SELECT * FROM users WHERE phonenumber = ?';
	con.query(sql, [req.params.phonenumber], (err, rows, fields) => {
		if (!err) {
			if(req.params.password != "none") {
				if(rows.length == 0) {
					console.log("user does not exist");
				}
				else {
					if(rows[0].password) {
						bcrypt.compare(req.params.password, rows[0].password, function(err, result) {
							console.log((req.params.password).localeCompare(rows[0].password));
							// bcrypt compare parameters should be entered password, hash, and function
							// if(result) {
							if((req.params.password).localeCompare(rows[0].password)==0){
								console.log("Password matches!");
								res.send(rows);
							} else {
								console.log("Password doesn't match!");
							} 
						});
					}
				}
			}
			else {
				res.send(rows);
			}
		}
		else
			console.log(err);
	});
});


// //delete a user
// // how to delete certain user -> /users/phonenumber
// app.delete('/users/:phonenumber', (req, res) => {

// 	var sql = 'DELETE FROM users WHERE phonenumber = ?';
// 	con.query(sql, [req.params.phonenumber], (err, rows, fields) => {
// 		if (!err)
// 			res.send('Deleted successfully');
// 		else
// 			console.log(err);
// 	});
// });

//insert a user
app.post('/users', (req, res) => {

	let user = req.body;

	if(typeof user.firstname != "undefined") {

		bcrypt.hash(user.password, 10, function(err, hash) {
			// Store hash in database
			var sql = 'SET @firstname = ?; SET @lastname = ?; SET @phonenumber = ?; SET @requestedAdminRights = ?; SET @password = ?; SET @comm1 = ?; SET @comm2 = ?; SET @comm3 = ?; SET @comm4 = ?; SET @comm5 = ?; SET @comm6 = ?; SET @comm7 = ?; SET @comm8 = ?; SET @comm9 = ?; SET @comm10 = ?; SET @comm11 = ?; SET @comm12 = ?; SET @comm13 = ?; SET @comm14 = ?; SET @allcomm = ?;\
			CALL waterdb.AddNewUser(@firstname, @lastname, @phonenumber, @requestedAdminRights, @password, @comm1, @comm2, @comm3, @comm4, @comm5, @comm6, @comm7, @comm8, @comm9, @comm10, @comm11, @comm12, @comm13, @comm14, @allcomm);';

			con.query(sql, [user.firstname, user.lastname, user.phonenumber, user.requestedAdminRights, hash, user.comm1, user.comm2, user.comm3, user.comm4, user.comm5, user.comm6, user.comm7, user.comm8, user.comm9, user.comm10, user.comm11, user.comm12, user.comm13, user.comm14, user.allcomm], (err, rows, fields) => {
				if (!err)
					res.send('Inserted successfully');
				else
					console.log(err);
			});
		});
	}
	else {
		var sql = 'UPDATE users SET givenAdminRights = ? WHERE phonenumber = ?'; 
	
		con.query(sql, [1, user.phonenumber], (err, rows, fields) => {
			if (!err)
				res.send('Updated successfully');
			else
				console.log(err);
		});
	}	
});


//get all reports
app.get('/reports', (req, res) => {

	//var sql = 'SELECT * FROM reports';
	var sql = 'SELECT idreports, title, DATE_FORMAT(date, "%d/%m/%Y") date, urgent, message, audio, image FROM reports';
	con.query(sql, (err, rows, fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});

//get all incidents
app.get('/incidents', (req, res) => {

	//var sql = 'SELECT * FROM incidents';
	var sql = 'SELECT idincidents, sender, DATE_FORMAT(date, "%d/%m/%Y") date, urgent, message, audio, subject, image, readYn, phoneNumber FROM incidents';
	con.query(sql, (err, rows, fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});

//get one incident
// how to call for certain user -> /users/incidentID
app.get('/incidents/:idincidents', (req, res) => {

	var sql = 'SELECT * FROM incidents WHERE idincidents = ?';
	con.query(sql, [req.params.idincident], (err, rows, fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});



//get one report
// how to call for certain report -> /report/idreports
app.get('/reports/:idreports', (req, res) => {

	var sql = 'SELECT * FROM reports WHERE idreports = ?';
	con.query(sql, [req.params.idreports], (err, rows, fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});

//insert a new water quality report
app.post('/reports', (req, res) => {

	let report = req.body;

	var sql = 'SET @title = ?; SET @urgent = ?; SET @message = ?; SET @audio = ?; SET @image = ?; SET @comm1 = ?; SET @comm2 = ?; SET @comm3 = ?; SET @comm4 = ?; SET @comm5 = ?; SET @comm6 = ?; SET @comm7 = ?; SET @comm8 = ?; SET @comm9 = ?; SET @comm10 = ?; SET @comm11 = ?; SET @comm12 = ?; SET @comm13 = ?; SET @comm14 = ?; SET @allcomm = ?;\
				CALL waterdb.AddNewReport(@title, @urgent, @message, @audio, @image, @comm1, @comm2, @comm3, @comm4, @comm5, @comm6, @comm7, @comm8, @comm9, @comm10, @comm11, @comm12, @comm13, @comm14, @allcomm);';
	

	con.query(sql, [report.title, report.urgent, report.message, report.audio, report.image, report.comm1, report.comm2, report.comm3, report.comm4, report.comm5, report.comm6, report.comm7, report.comm8, report.comm9, report.comm10, report.comm11, report.comm12, report.comm13, report.comm14, report.allcomm], (err, rows, fields) => {
		if (!err)
			res.send('New report inserted successfully');
		else
			console.log(err);
	});
});

//insert a new incident report
app.post('/incidents', (req, res) => {

	let incident = req.body;

	if(typeof incident.subject == "undefined") {
		var sql = 'SET @sender = ?; SET @urgent = ?; SET @message = ?; SET @audio = ?; SET @image = ?; SET @subject = ?; SET @phoneNumber = ?; SET @comm1 = ?; SET @comm2 = ?; SET @comm3 = ?; SET @comm4 = ?; SET @comm5 = ?; SET @comm6 = ?; SET @comm7 = ?; SET @comm8 = ?; SET @comm9 = ?; SET @comm10 = ?; SET @comm11 = ?; SET @comm12 = ?; SET @comm13 = ?; SET @comm14 = ?; SET @allcomm = ?;\
				CALL waterdb.AddNewIncident(@sender, @urgent, @message, @audio, @image, @subject, @phoneNumber, @comm1, @comm2, @comm3, @comm4, @comm5, @comm6, @comm7, @comm8, @comm9, @comm10, @comm11, @comm12, @comm13, @comm14, @allcomm);';
		

		con.query(sql, [incident.sender, incident.urgent, incident.message, incident.audio, incident.image, incident.subject, incident.phoneNumber, incident.comm1, incident.comm2, incident.comm3, incident.comm4, incident.comm5, incident.comm6, incident.comm7, incident.comm8, incident.comm9, incident.comm10, incident.comm11, incident.comm12, incident.comm13, incident.comm14, incident.allcomm], (err, rows, fields) => {
			if (!err)
				res.send('New incident inserted successfully');
			else
				console.log(err);
		});
	}
	else {
		console.log("update incidents");
		console.log(incident.subject);
		var sql = 'UPDATE incidents SET readYn = ? WHERE subject = ?'; 
	
		con.query(sql, [1, incident.subject], (err, rows, fields) => {
			if (!err)
				res.send('Updated successfully');
			else
				console.log(err);
		});
	}
});

//insert a new mail message
app.post('/mail', (req, res) => {

	let mail = req.body;

	var sql = 'SET @body = ?; SET @audio = ?; SET @phoneNumber = ?; SET @incidentIdNum = ?; SET @subject = ?; SET @oldMessage = ?;\
				CALL waterdb.AddNewMail(@body, @audio, @phoneNumber, @incidentIdNum, @subject, @oldMessage);';
	

	con.query(sql, [mail.body, mail.audio, mail.phoneNumber, mail.incidentIdNum, mail.subject, mail.oldMessage], (err, rows, fields) => {
		if (!err)
			res.send('New mail inserted successfully');
		else
			console.log(err);
	});
});

//get all mail for one user
// how to call for certain user -> /mail/phonenumber
app.get('/mail/:phoneNumber', (req, res) => {

	var sql = 'SELECT DATE_FORMAT(date, "%d/%m/%Y") date, body, incidentIdNum, subject, oldMessage FROM mail WHERE phoneNumber = ?';
	con.query(sql, [req.params.phoneNumber], (err, rows, fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});
