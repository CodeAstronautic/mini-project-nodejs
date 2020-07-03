const nodemailer = require('nodemailer'); 

let mailTransporter = nodemailer.createTransport({ 
    //service: 'gmail', 
    pool: true,
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: { 
		user: 'xyz@gmail.com', 
		pass: '*******8'
	} ,
	tls: {
		rejectUnauthorized: false
	}
}); 
console.log('created')
let mailOption = { 
	from: 'pm.globaliasoft@gmail.com', 
	to: 'poojam9904@gmail.com', 
	subject: 'Test mail', 
	text: 'Node.js testing mail from globalia '
}; 

mailTransporter.sendMail(mailOption, function(err, info) { 
	if(err) { 
		console.log(err); 
	} else { 
		console.log('Email sent successfully'); 
		console.log(info);
	} 
}); 
