const express = require("express");
const app = express();
const path = require("path");

const port = 4000;

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'view')));

app.set('view engine', 'html');

app.get('/', (req,res)=>{
    res.status(200).render('index.html');
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});