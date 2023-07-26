const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(express.json());
app.use(cors())

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
  ];
  
  // GET endpoint to return users
  app.get('/api/users', (req, res) => {
    res.json(users);
  });

//   POST Request send mail

app.post('/api/send', (req, res) => {

    const { subject, message, bccList, host, username, password, port } = req.body;

    var transport = nodemailer.createTransport({
      host: host,
      port: port,
      auth: {
        user: username,
        pass: password
      }
    });

    // Function to send emails
function sendEmail(emailAddress) {
  const mailOptions = {
    from: 'testsmtp@racius.tech', // Replace with your Gmail email address
    to: emailAddress, // Set the 'to' field to the current email address
    subject: subject,
    html: message
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// Loop through the email list and send emails
for (const email of bccList) {
  sendEmail(email);
}





res.status(200).json({ message: 'Email sent successfully Confirm from backend' });

});



  // Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });