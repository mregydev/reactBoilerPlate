const app = require('express')()


app.get('/app', (req, res) => res.sendFile(`${__dirname}/public/index.html`))

app.get('/files/:file', (req, res) => {
    res.setHeader('content-type', 'application/javascript')
    res.sendFile(`${__dirname}/dist/${req.params.file}`)
})

app.listen(8080);

console.log('app is listening')