const path = require("path");
const express = require("express");
const userRouter = require('./routes/user');
const scoresRouter = require('./routes/scores');
const userHighScores = require('./routes/highscore')
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer"); //added by joe for testing contact form
const router = express.Router(); //added by joe for testing contact form
require("dotenv").config();
require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/scores", scoresRouter);
app.use("/highscores", userHighScores);
app.use("/", router); //added by joe for contact form


const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "contact.tbfh",
    pass: `${process.env.emailPw}`
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready To Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "contact.tbfh@gmail.com",
    subject: "Contact Form Message",
    html: `<p> Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "failed" });
    } else {
      res.json({ status: "sent" });
    }
  });
});

app.get("/", (req, res) => {
  res.status(200).json({ status: "working" });
});

app.listen(PORT, () => {
  console.log(` online at ${PORT} `);
});