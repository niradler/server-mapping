if (typeof require === 'undefined') {
    if (!axios) {
        console.log('axios is a dependency, please include it in the top of the index.html file (<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js"></script>)')
    }
} else {
    var axios = require('axios');
}


function Server(config) {
    this.url = config.url;
    this.actions = config.actions;
    for (var key in  this.actions) {
        Server.prototype[key] = function(param,data) {
            var host = this.url.concat(this.actions[key].path);
            var find_var = host.indexOf(':');
            if (find_var>-1 && arguments.length>0) {
                for (var i = 0; i < arguments.length; i++) {
                    var name=Object.getOwnPropertyNames(arguments[i])[0],value=arguments[i][name];
                    host = host.replace(':' + name,value)
                }
            }
            var options ={
                method:  this.actions[key].method,
                url: host,
            }
            if(['post','put'].indexOf(this.actions[key].method.toLowerCase())>-1)
            options.data=data?data:{};
            return axios(options);
        }
    }
   
}
if (typeof exports === 'undefined') {
    window.Server=Server;
} else {
    module.exports= Server;
}