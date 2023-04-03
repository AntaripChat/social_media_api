const app = require('./app');
const config = require('./config');
const mongo = require('mongoose');

mongo.connect(config.DB_URL)
.then(()=>console.log('DB connect'))
.catch((err)=>console.log(err));


//yDWn6wCnWJI73J9p
app.listen(config.PORT,()=>{
    console.log(`Running on ${config.PORT}`);
})