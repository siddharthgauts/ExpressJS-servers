import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Congratulations, you have established your Express Server.</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About me</h1><p>My name is Siddharth</p>");
});

app.get("/contact", (req, res) => {
  res.send('<h1><a href="https://www.linkedin.com/in/siddharthgauts">Contact Me</a></h1><p>Phone: +91 7704959880</p>');

});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
