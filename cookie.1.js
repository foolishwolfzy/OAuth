const http = require('http')
const session = {}
http.createServer((req, res) => {
    const sessionKey = 'sid'

    if (req.url === '/favicon.ico') {
        res.end('')
    } 
        const cookie = req.headers.cookie
        console.log('cookie:', cookie)
        res.setHeader('Set-Cookie', 'cookie=111')
        res.end('hello cookie')
        
    

}).listen(3000)