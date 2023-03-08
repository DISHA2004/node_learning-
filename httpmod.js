const http = require('http')
//req for the incoming request
const server= http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome ')
    }
    if(req.url === '/about'){
        res.end('another section with the help of url of req')
    }
    res.end(`<h1>opps we cannt find the page </h1>
    <a href="/">back there</a>`
    )
})
server.listen(8080)
//u will see the message at the port number 8080 
//created first website 
