import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {
      posts:posts,
    });
  });

  app.get("/create", (req,res) => {
    res.render("create.ejs");
  });

  app.post('/compose', (req, res) => {
    const postTitle = req.body.postTitle
    const postContent = req.body.postContent
  
    const postObj = {
      "title":postTitle,
      "content":postContent
    }
    
    posts.push(postObj)
    console.log(posts)
    res.render("index.ejs", {
      posts:posts,
    });
  });
  
  app.delete("/delete", (req, res) => {
    //Deleting
    res.sendStatus(200);
  });
  

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });