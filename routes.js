const fs = require('fs');
const { buffer } = require('stream/consumers');

const requestHandler = (req, res) => {
    let dataFromFile = ''
    if (req.url == '/check') {
        let errorFileReading = ''
        return fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err)
                res.statusCode = 500;
                errorFileReading = 'Error reading the file'
                return res
            } else {
                dataFromFile = data
                res.setHeader('Content-Type', 'text/html')
                res.write('<html>')
                res.write('<head>MY WEBSITE</head>')
                res.write(`<body><form action="/message" method="post"><input type="text" name="message"></input></br><button type="submit">Submit</button></form><h4>${dataFromFile}</h4></body>`)
                res.write('</html>')
                return res.end();
            }
        });
    }

    if (req.url == '/message' && req.method == 'POST') {
        const body = []
        req.on('data', (chunk) => {
            // console.log(chunk)
            body.push(chunk)
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            let parsedMessage = parsedBody.split('=')[1]

            fs.appendFileSync('message.txt', parsedMessage + '\n', (err) => {
                console.log(err)
            })
            res.statusCode = 302;
            res.setHeader('Location', '/check');
            return res.end();
        })
    }
    res.write('<html>')
    res.write('<head>MY WEBSITE</head>')
    res.write('<body>Home</body>')
    res.write('</html>')
}
// module.exports = requestHandler

// module.exports = {
//     'requestHandler': requestHandler,
//     'someText': 'sham'
// }

module.exports.requestHandler = requestHandler
module.exports.someText = 'sham'