const express = require("express");
const questions = [];

module.exports = (app) => {
  const router = express.Router();
  app.use("/questions", router);

  router.get('/', (req, res) => {
    const qs = questions.map(q => ({
      id: q.id,
      title: q.title,
      description: q.description,
      answers: q.answers.length,
    }));
    res.send(qs);
  });

  router.get('/:id', (req, res) => {
    const question = questions.filter(q => (q.id === parseInt(req.params.id)));
    if (question.length > 1) return res.status(500).send();
    if (question.length === 0) return res.status(404).send();
    res.send(question[0]);
  });

  router.post('/', (req, res) => {
    const {title, description} = req.body;
    const newQuestion = {
      id: questions.length + 1,
      title,
      description,
      answers: [],
    };
    questions.push(newQuestion);
    res.send();
  });

  router.post('/answer/:id', (req, res) => {
    const {answer} = req.body;

    const question = questions.filter(q => (q.id === parseInt(req.params.id)));
    if (question.length > 1) return res.status(500).send();
    if (question.length === 0) return res.status(404).send();
  
    question[0].answers.push({
      answer,
    });
  
    res.send();
  });
}