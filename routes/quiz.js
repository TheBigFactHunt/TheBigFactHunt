// const express = require("express");
// const Quiz = require("../models/quiz");
// const router = express.Router();

// router.get("/", (req, res) => {
//   Quiz.find({}, (err, obj) => {
//       if (err) {
//         res.status(500).json({ msg: err });
//       } else {
//         res.status(200).json(obj);
//       }
//   });
// });

// router.post("/", (req, res) => {
//   const data = {
//     category: req.body.category,
//     type: req.body.type,
//     difficulty: req.body.difficulty,
//     question: req.body.question,
//     correct_answer: req.body.correct_answer,
//     incorrect_answers: req.body.incorrect_answers,
//   };
//    new Quiz(data).save((err, obj) => {
//     if (err) {
//       res.status(500).json({ msg: err });
//     } else {
//       res.status(200).json(obj);
//     }
//   });
// });

// router.get("/:id", (req, res) => {
//   Quiz.findById(req.params.id, (err, obj) => {
//     if (err) {
//       console.log(err);
//       res.status(200).json({ msg: err });
//     } else {
//       res.status(200).json(obj);
//     }
//   });
// });

// module.exports = router;