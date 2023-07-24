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

    const { email, subject, message } = req.body;

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "cb7c35080c96cb",
          pass: "351dc4a90408c7"
        }
      });


      // Define the email optionsn
    const mailOptions = {
        from: 'testsmtp@brotherr.co.uk',
        to: email, // Replace with the recipient's email address
        subject: subject,
        html: message,
      };

      //send mail

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).json({ error: 'Error sending email' });
        } else {
          console.log('Email sent successfully:', info.messageId);
          res.status(200).json({ message: 'Email sent successfully' });
        }
      });


});



  // Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });