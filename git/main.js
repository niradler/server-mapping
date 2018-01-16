var axios = require('axios');
var config = require('./config')();
var server =  new Server(config)
console.log(server)
server.get({id:121}).then(function(res){
    console.log(res);
}).catch(function(err) {
    console.log(err)
});