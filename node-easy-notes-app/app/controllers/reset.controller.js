const crypto = require("crypto");
var algorithm = "aes256";
var jwt = require("jsonwebtoken");
var helper = require("sendgrid").mail;
//var sg = require("sendgrid")();

var sg = require("sendgrid")(
  "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"
);

//API :  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


const config = require("../../config/database.config");
var key = config.key;
const Users = require("../models/user.model");

function encrypt(email) {
  var cipher = crypto.createCipher(algorithm, key);
  return cipher.update(email, "utf8", "hex") + cipher.final("hex");
}

function decrypt(encrypted) {
  var decipher = crypto.createDecipher(algorithm, key);
  return decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
}

exports.Reset = async (req, res) => {
  try {
   // jwt.verify(req.headers.authorization, key);
    //var email = encrypt(req.body.to);
    from_email = new helper.Email("poojam9904@gmail.com", req.body.invite);
    console.log(req.body.invite)
    
    
    to_email = new helper.Email(req.body.to);
    console.log(to_email)
    var genToken = jwt.sign(
      {
        email: req.body.to,
        userId: req.body.userId,
        inviterName: req.body.inviterName
      },
      key
      
    );
    console.log(key)
    var token = encrypt(genToken);
    console.log(token)
    if (req.body.type == "verify") {
      subject = "Confirm your email";
      content = new helper.Content(
        "text/html",
        `Hi,<br><br> Welcome to note! To get started, please take a few moments to confirm your email:<br> 
        ${req.body.url}verify/${token} 
        <br><br> and please contact our support team if you trouble to verify your account in our site.<br><br>Thank you<br><br>Rori`
      );
    } else if (req.body.type == "invite") {
      subject = "Welcome to Worktop.io";
      content = new helper.Content(
        "text/html",
        `<!DOCTYPE html><html><head><title></title><meta content="text/html; charset=utf-8" http-equiv="Content-Type"/><meta content="width=320, target-densitydpi=device-dpi" name="viewport"/><style type="text/css">/* Client-specific Styles */#outlook a{padding: 0;}/* Force Outlook to provide a "view in browser" button. */body{width: 100% !important;}.ReadMsgBody{width: 100%;}.ExternalClass{width: 100%;display: block !important;}/* Force Hotmail to display emails at full width *//* Reset Styles *//* Add 100px so mobile switch bar doesn't cover street address. */body{background-color: #e5e5e5;margin: 0;padding: 0;}img{outline: none;text-decoration: none;display: block;}br,strong br,b br,em br,i br{line-height: 100%;}h1,h2,h3,h4,h5,h6{line-height: 100% !important;-webkit-font-smoothing: antialiased;}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color: #333b40 !important;}h1 a:active,h2 a:active,h3 a:active,h4 a:active,h5 a:active,h6 a:active{color: #333b40 !important;}h1 a:visited,h2 a:visited,h3 a:visited,h4 a:visited,h5 a:visited,h6 a:visited{color: #333b40 !important;}.email-table table td,.email-table table tr{border-collapse: collapse;}.yshortcuts,.yshortcuts a,.yshortcuts a:link,.yshortcuts a:visited,.yshortcuts a:hover,.yshortcuts a span{color: black;text-decoration: none !important;border-bottom: none !important;background: none !important;}body,td{font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;font-size: 15px;color: #333b40;margin: 0;padding: 0;line-height: 22px !important;}#background-table{background-color: #e5e5e5;}#content-table{background-color: #ffffff;text-align: left;}.logo{display: block;text-align: center;border: none;}.separator{margin: 10px 0 20px 0;border: none;color: #eaeaea;background-color: #eaeaea;height: 1px;}#content-table p{margin: 0 0 20px 0;}.footer{color: #898a8b;font-size: 12px;line-height: 18px;text-align: center;padding-bottom: 20px;}/* Mobile-specific Styles */@media only screen and (max-width: 480px){.w_full{width: 360px !important;}.w_padding{width: 20px !important;}.w_full_with_padding{width: 320px !important;}.w_message{width: 250px !important;}}</style></head><body><table class="email-table" border="0" cellpadding="0" cellspacing="0" id="background-table" width="100%"><tbody><tr><td align="center" bgcolor="#E5E5E5"><table border="0" cellpadding="0" cellspacing="0" class="w_full" width="480"><tbody><tr><td class="w_full" height="30" width="480"></td></tr><tr><td align="center" class="w_full" height="30" width="480"> <img alt="Logo" border="0" class="logo"height="50" src="https://pd-ws-static.s3.amazonaws.com/886595/logo-1489264756.png"style="display: block; height: 50px; text-align: center; border:none;" title="Logo"/> </td></tr><tr><td class="w_full" height="30" width="480"></td></tr><tr><td align="center" bgcolor="#FFFFFF" class="w_full" id="content-table" width="480"><table border="0" cellpadding="0" cellspacing="0" class="w_full" width="480"><tbody><tr><td class="w_full" height="30" width="480"></td></tr><tr><td class="w_full" width="480"><table border="0" cellpadding="0" cellspacing="0" class="w_full" width="480"><tr><td class="w_padding" width="40"></td><td class="w_full_with_padding" width="400"><table border="0" cellpadding="0" cellspacing="0" class="w_full_with_padding"width="400"><tr><td class="w_full_with_padding" width="400"><table border="0" cellpadding="0" cellspacing="0" class="w_full_with_padding"width="400"><tbody><tr><td class="w_avatar" valign="top" width="70"> <img alt="" height="50"src="https://centrik.in/wp-content/uploads/2017/02/user-image-.png" width="50"/> </td><td class="w_message"style="font-family: 'Helvetica Neue','Helvetica',Arial,sans-serif;font-size: 15px;color: #333b40;margin: 0;padding: 0;border-collapse: collapse;line-height: 22px!important;"valign="top" width="330">
         <b>
        </b> workspace. </td></tr></tbody></table></td></tr><tr><td class="w_full_with_padding" width="400"><hr class="separator" noshade size="1"style="margin: 10px 0 20px 0; border: none; color: #eaeaea; background-color: #eaeaea; height: 1px;"/></td></tr><tr><td class="m_-1991943758979084279w_full_with_padding" width="400" align="center"><table border="0" cellpadding="0" cellspacing="0"style="border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-image:linear-gradient(90deg,#173656 0%,#173656 100%);border-collapse:collapse"><tbody><tr><td align="center" valign="middle" style="font-size:16px;padding:11px 25px"><a title="Open the document" href="${
          req.body.url
        }invite/${token} </a> </td></tr></tbody></table></td></tr></table></td><td class="w_padding" width="40"></td></tr></table></td></tr><tr><td class="w_full" height="50" width="480"></td></tr></tbody></table></td></tr><tr><td class="w_full" height="15" width="480"></td></tr><tr><td class="w_full" width="480"><table border="0" cellpadding="0" cellspacing="0" class="w_full" width="480"><tbody><tr><td class="w_padding" width="40"></td><td class="w_full_with_padding" width="400"><p align="center" class="footer"style="color: #898a8b; font-size: 12px; line-height: 18px; text-align: center; padding-bottom:20px;font-family: 'Helvetica Neue','Helvetica',Arial,sans-serif;">Worktop.io is an application to collaborate on projects in a fast, secure, and professionalway. </p></td><td class="w_padding" width="40"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><img alt="" height="1px"src="http://email.pdoc.co/o/eJwVy0sOwiAUAMDTyJLwfj5YsNH2IHxKSqLFtDbx-Orsp8ZKRdH0iA7UESAEZAILDkTYagAge59vk9KMF3avOootw6wxt1Clck5enZSW0Sf2jUSLFyF_NXtM5_Hu23-tY9n651jGI-Vff34BORch4w"width="1px"/></body></html>`
      );
    } else if (req.body.type == "resetPassword") {
      var token1 = jwt.sign({ email: req.body.to }, key, {
        expiresIn: "300000ms"
      });
      subject = "Worktop.io reset password";
      content = new helper.Content(
        "text/html",
        `Hi, ${
          req.body.name
        }<br> please, reset you password in worktop.io site using following link:<br> 
        ${
          req.body.url
        }reset/${token1} <br><br><b>This link valid only 5 minutes</b>
        <br><br> and please contact our support team if you trouble to rest your password in our site.<br><br>Thank you<br>Rori`
      );
    } else {
      subject = "Welcome to Worktop.io";
      content = new helper.Content(
        "text/html",
        `Welcome to Worktop.io!,<br><br> Your email is now verified. Please login to Worktop using following details:<br><br> URL: 
        ${
          req.body.url
        }login <br><br>Password: <b>test123</b><br><br>Thank you<br><br>Rori`
      );
    }
    mail = new helper.Mail(from_email, subject, to_email, content);

    var request = sg.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
      console.log("1", response.statusCode);
      if (error) {
        console.log(err)
        res.json({
          status: false,
          statusCode: 404,
          message: "mail not send successfully",
          data: error
        });
      } else {
        res.json({
          status: true,
          statusCode: response.statusCode,
          message: "mail send successfully"
        });
      }
    });
  } catch (err) {
    console.log(err)
    res.json({
      status: false,
      statusCode: 401,
      message: "Unauthorization user",
      data: err
    });
  }
};


