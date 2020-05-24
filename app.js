let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
Blog = require('./models/blog');

Blog.create({
    title: 'You are the only one',
    image: 'pics/4.jpg',
    body: 'I ball every summer, what you up to',
    class: 'Education',

}, function(err, blog){
    if (err) {
        console.log(err);
    } else {
        console.log(blog)
    }
});

Blog.create({
    title: 'Latest Movies',
    image: 'pics/4.jpg',
    body: 'I ball every summer, what you up to',
    class: 'Education',

}, function(err, blog){
    if (err) {
        console.log(err);
    } else {
        console.log(blog)
    }
});
Blog.create({
    title: 'Overdosin',
    image: 'pics/4.jpg',
    body: 'I ball every summer, what you up to',
    class: 'Education',

}, function(err, blog){
    if (err) {
        console.log(err);
    } else {
        console.log(blog)
    }
});

Blog.create({
    title: 'You are the only one',
    image: 'pics/4.jpg',
    body: 'I ball every summer, what you up to',
    class: 'life',

}, function(err, blog){
    if (err) {
        console.log(err);
    } else {
        console.log(blog)
    }
});

Blog.create({
    title: 'Latest Movies',
    image: 'pics/4.jpg',
    body: 'I ball every summer, what you up to',
    class: 'Education',

}, function(err, blog){
    if (err) {
        console.log(err);
    } else {
        console.log(blog)
    }
});
Blog.create({
    title: 'Overdosin',
    image: 'pics/4.jpg',
    body: 'I ball every summer, what you up to',
    class: 'politics',

}, function(err, blog){
    if (err) {
        console.log(err);
    } else {
        console.log(blog)
    }
});

Blog.create({
    title: 'You are the only one',
    image: 'pics/4.jpg',
    body: 'I ball every summer, what you up to',
    class: 'Education',

}, function(err, blog){
    if (err) {
        console.log(err);
    } else {
        console.log(blog)
    }
});

Blog.create({
    title: 'Latest Movies',
    image: 'pics/4.jpg',
    body: 'I ball every summer, what you up to',
    class: 'Featured',

}, function(err, blog){
    if (err) {
        console.log(err);
    } else {
        console.log(blog)
    }
});
Blog.create({
    title: 'Overdosin',
    image: 'pics/4.jpg',
    body: 'I ball every summer, what you up to',
    class: 'entertainment',

}, function(err, blog){
    if (err) {
        console.log(err);
    } else {
        console.log(blog)
    }
});


//APP CONFIG
mongoose.connect('mongodb://localhost/Health_Database');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//ROUTES
app.get('/', function(req, res){
    res.redirect('/RealBlog');
});

app.get('/RealBlog', function(req, res){
    Blog.find({}, function(err, blogs){
        if (err) {
            console.log(err);
        } else {
            res.render('index', {blogs: blogs});
        };
    });
    
});



app.listen('1500', function(){
    console.log('RealBlog server has started!!!');
});

// Blog.remove({}, function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('removed')
//     }
// });

