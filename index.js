const express = require("express");
const userRouter = require('./routes/user');
const scoresRouter = require('./routes/scores');
const cors = require("cors");
const bodyParser = require('body-parser');
// const nodemailer = require("nodemailer"); //added by joe for testing contact form
// const router = express.Router(); //added by joe for testing contact form
require("dotenv").config();
require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/scores", scoresRouter);
// app.use("/", router); //added by joe for contact form

// app.listen(5000, () => console.log("Server Running")); //added by joe for testing contact form

// const contactEmail = nodemailer.createTransport({
//   host: "smtp.example.com",
//   port: 587,
//   auth: {
//     user: "username@example.com",
//     pass: "password",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready To Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message; 
//   const mail = {
//     from: name,
//     to: "username@example.com",
//     subject: "Contact Form Message",
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "failed" });
//     } else {
//       res.json({ status: "sent" });
//     }
//   });
// });

app.get("/", (req, res) => {
  res.status(200).json({status:"working"});
});

app.listen(PORT, () => {
  console.log(` online at ${PORT} `);
});