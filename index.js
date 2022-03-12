const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000



app.use(express.static('public'))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(__dirname + "/public/index.html")
  })


app.post("/login", (req, res) =>{
    let data = req.body;
    console.log(data);   
 

    res.status(201).json({success: "true"})
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})