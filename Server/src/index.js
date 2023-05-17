
const http = require('http');
const data = require("./utils/data")

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url === "/rickandmorty/character"){
        let idString = request.url.split( "/")[2]
        const urlId = Number(idString)

        const character = data.find(obj => obj.id === urlId)
        response.writeHead(200,{"Content-type": "application/json"})
        response.end(JSON.stringify(character))
    
    }

}).listen(3001,'localhost')