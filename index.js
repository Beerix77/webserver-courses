
//const Joi = require('joi'); //class
const express = require('express');
const app = express();


app.use(express.json()); // adding middleware

/*
app.get()
app.post()
app.put()
app.delete()
*/


const PORT = process.env.PORT || 2226;

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});


const courses = [
  {id: 1, name: "Math"},
  {id: 2, name: "Astrology"},
  {id: 3, name: "Chemistry"},
  {id: 4, name: "Physics"},
  {id: 5, name: "Adv. Math"}
];



app.get('/', (req, res) => {
  res.send('Hello World!');
}); // GET '/'







///////////////////////////////////////////////////////////////////////////

app.get('/api/courses', (req, res) => {

  //res.send(courses);
  console.log(req.body.id);

}); //GET '/api/courses'




app.post('/api/courses', (req, res) => {

  // const schema = {
  //   name: Joi.string().min(3).required()
  // };

  // const result = Joi.validate(req.body, schema);
  // console.log(result);


  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send('Name must be > 3 chars and is required.');
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);

}); //POST '/api/courses'


/////////////////////////////////////////////////////////////








//req.params.x is '/:x'
app.get('/api/courses/:id', (req, res) => {
 
  let course = courses.find( x => x.id === parseInt(req.params.id));
  if (!course){
    res.status(404).send(`Course ID does not exist!`);
  }
  res.send(course);

}); // GET '/api/courses'




