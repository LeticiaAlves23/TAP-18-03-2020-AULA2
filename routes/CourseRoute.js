const express = require('express');
const CourseController = require('../Modela/CourseModel')
const app = express();

app.get('/course', async (req, res) => {
  res.send('Uma lista de cursos');
  const courses = await CourseModel.find({});

  try {
    res.send(courses);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.post('/course', async (req, res) => {
    res.send('Cadastro de novo curso');
    const course = new CourseModel(req.body);
  
    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(500).send(err);
    }
  });


  app.put('/course', async (req, res) => {
    res.send('Edição de um curso existente');
    const courses = await CourseModel.find({});
  
    try {
      res.send(courses);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  app.delete('/course/:id', async (req, res) => {
    try {
      const course = await CourseModel.findByIdAndDelete(req.params.id)
  
      if (!course) res.status(404).send("Remoção de um curso por ID")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app