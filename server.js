require('./db')
const express = require('express')
const app = express()
const PORT = 3000 
const path = require('path')


const staticPath = path.join(__dirname, '/public')
app.use(express.static(staticPath))
console.log(staticPath);

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

app.listen(PORT, () =>{
    console.log(`app is running on ${PORT}`);
    
})