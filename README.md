# Description
mapping server route by config object, make client server communication easily manageable.


## Getting started
**Download using npm**
- npm install server-mapping

**Create a config file to description server interaction**
- Example of how a config file should look like. [link](https://github.com/niradler/server-mapping/blob/master/config.js)

**Include scripts**
```markdown
 <!-- include server-mapping core code and dependency -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js"></script>
  <script src="node_modules/server-mapping/index.js"></script>  

 <!-- initialize the server -->
  <script src="config.js"></script>  
  <script>
  var server =  new Server(config)
  </script>  
```

## Demo
**open developer console F12**
 [link](https://niradler.github.io/server-mapping/)