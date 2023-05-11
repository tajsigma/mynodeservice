const express = require('express');
const app = express();
const courses = [
{id:1, name: 'Course 1'},
{id:2, name: 'Course 2'},
{id:3, name: 'Course 3'},
{id:4, name: 'Course 4'},
{id:5, name: 'Course 5'},
{id:6, name: 'Course 6'},
{id:7, name: 'Course 7'},
{id:8, name: 'Course 8'},
{id:9, name: 'Course 9'},
{id:10, name: 'Course 10'},
{id:11, name: 'Course 11'},
]
app.get('/api/courses', (req, res) =>{
res.send(courses);
});
app.get('/api/courses/:id', (req, res) =>{
//res.send(req.params);
const course = courses.find(c=>c.id === parseInt(req.params.id));
if(!course) res.status(404).send('Course with given ID not found.');
res.send(course);
});
app.listen(3000);