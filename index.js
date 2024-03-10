
const express = require('express');

const app = express();

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
  {id: 1, name: "Maths"},
  {id: 2, name: "Astrology"},
  {id: 3, name: "Chemistry"},
  {id: 4, name: "Physics"},
  {id: 5, name: "Adv. Maths"}
]



app.get('/', (req, res) => {
  res.send('Hello World!');
}); // GET '/'




app.get('/api/courses', (req, res) => {
  res.send(courses);
}); // GET '/api/courses'


//req.params.x is '/:x'
app.get('/api/courses/:id', (req, res) => {
 
  let course = courses.find( x => x.id === parseInt(req.params.id));
  if (!course){
    res.status(404).send(`Course ID does not exist!`);
  }
  res.send(course);

}); // GET '/api/courses'

