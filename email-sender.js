const nodemailer = require('nodemailer');

// Create a transporter with Gmail SMTP settings
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-password',
//   },
// });



var transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: "d1547818276f2548dfdaf397ee2b4267"
    }
  });

// Function to send an email
async function sendEmail(transporter) { // Accept transporter as an argument
  try {
    // Define the email options
    const mailOptions = {
      from: 'testsmtp@brotherr.co.uk',
      to: 'edidiongbobson@gmail.com', // Replace with the recipient's email address
      subject: 'Service Outrage',
      html: '<html><p>Dear Iw.net Email User </p> <p>We emailed you last month to let you know about changes we are making to our Terms of Service and Privacy Policy.</p> <p>These changes are key steps towards creating what s next for our consumers, like you, while empowering them with transparency and controls over how and when their data is used. </p>You can learn more about what these policies mean for you here and more about the changes in our FAQs. <p>In order to continue to access your iw.net Email account after 24th July 2023, you will need to confirm you accept the Terms of Service. Click here to start. </p> <p>If you do not want the new Terms of Service and Privacy Policy to apply to you, you will no longer be able to access your account from 24th July 2023. If you would like the contents of your email account, you may obtain a copy of your data by clicking here. Thank you for your time and cooperation, iw.net  Admin, Thank you for being an iw.net Subscriber.</p></html>',
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Call the function to send the email, passing the transporter
sendEmail(transport);
