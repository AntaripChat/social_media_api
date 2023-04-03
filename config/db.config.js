const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://social_media:yDWn6wCnWJI73J9p@cluster0.0ypsb62.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('DB connected');
}).catch((err) => {
    console.log(err);
});