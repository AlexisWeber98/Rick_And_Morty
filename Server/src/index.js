
const http = require('http');
const characters = require("./utils/data")

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url.includes("/rickandmorty/character")){
        let idString = request.url.split( "/").at(-1)
        const urlId = Number(idString)

        const character = characters.find((char) => char.id === urlId)
        response.writeHead(200,{"Content-type": "application/json"})
        response.end(JSON.stringify(character))
    
    }

}).listen(3001,'localhost')