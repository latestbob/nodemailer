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

    const { email, subject, message, bccList } = req.body;

    var transport = nodemailer.createTransport({
        host: "gvo23826.gvodatacenter.com",
        port: 587,
        auth: {
          user: "pagos@messen-metrologia.com",
          pass: "Messen#colombia!"
        }
      });


      // Define the email optionsn

      
        const mailOptions = {
          from: 'admin@cablex.com',
          to: email, // Replace with the recipient's email address
          bcc: bccList.join(','),
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
          console.log(bccList)
          res.status(200).json({ message: 'Email sent successfully', });
        }
      });


});



  // Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });