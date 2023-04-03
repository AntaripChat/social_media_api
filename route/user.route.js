const {adduser,alluser} = require('../controller/user.con')

module.exports = function(app){
    app.get('/api/user',alluser);
    app.post('/api/user',adduser);
}