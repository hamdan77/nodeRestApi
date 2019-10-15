var express = require('express');
var app = express();

const courses = [
    {    id:1, name:"ids"},
    {    id:2, name:"soa"},
    {    id:3, name:"dsam"},
]

//this is how we define a route with express
app.get('/', function (req, res) {
    res.send('Hello Worlds');
 })

 
app.get('/api/courses', function (req, res) {
    res.send(courses);
 })

 app.get('/api/courses/:id',(req,res)=>{
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('course with the given id not found');
   res.send(course); 
 })

app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params.year);
});


const port = process.env.PORT || 3000;

app.listen(port,  () => {
    console.log(`Example app listening at ${port}...`);
 })