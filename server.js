const app = require('./app');
const config = require('./config');
const {PORT} = require('./config/index');
require('./config/db.config')
// mongo.connect('mongodb+srv://social_media:yDWn6wCnWJI73J9p@cluster0.0ypsb62.mongodb.net/?retryWrites=true&w=majority')
// .then(()=>console.log('DB connect'))
// .catch((err)=>console.log(err));


//yDWn6wCnWJI73J9p
app.listen(PORT,()=>{
    console.log(`Running on ${PORT}`);
})