const {adduser,alluser} = require('../controller/user.con')
const {verify} = require('../middleware/auth')
module.exports = function(app){
    app.get('/api/user',alluser);
    app.post('/api/user',verify,adduser);
}