let mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
        title: String,
        image: String,
        body: String,
        class: String,
        created : {type: Date, default:Date.now}
});


module.exports = mongoose.model('blogs', blogSchema);