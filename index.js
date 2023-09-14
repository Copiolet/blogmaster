const express = require("express")
const mongoose = require("mongoose")
const app = express()
const Post = require("./models/Post")
const cors = require("cors")
const bodyParser = require("body-parser")

const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(express.json())

db = mongoose.connect("mongodb+srv://admin:lUAzFm6imJqvtNmI@cluster0.vwdddja.mongodb.net/?retryWrites=true").then(() => {
    console.log("Db connceted suffuly")
}).catch((err) => { console.log(err, err.message) });

app.get("/", (req, res) => {
    Post.find({}).then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    })
})

app.get("/add_post",(req,res) = {
    res.send("post submitted successfully")
})

app.post("/add_post",(req,res) = {
    res.send("post submitted successfully")
})

app.post("/api", (req, res) => {
    const title = req.body.title;
    const description = req.body.description
    const email = req.body.email;
    console.log(title, description,email);

    var post = new Post({
        title: title,
        description: description,
        email:email
    })
    post.save();
})

app.get("/datafetcher", (req, res) => {
    var postid = req.body.postid
    console.log(postid)
})

app.get("/post/:id", async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id)
    res.json(postDoc)
})

if (process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
}

app.listen(port, () => {
    console.log("SERVER LISTENING ON PORT 4000")
})  
