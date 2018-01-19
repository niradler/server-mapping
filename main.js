
var server =  new Server(config)
console.log(server)
var main = document.querySelector('#main');
main.innerHTML='<h1>Fetching ...</h1>'
server.get({id:121}).then(function(res){
    main.innerHTML='<h1>Done</h1><h3>Status: '+res.statusText+'</h3><div>Press F12 and see the result in the console.</div>'
    console.log(res);
}).catch(function(err) {
    console.log(err)
});