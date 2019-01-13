const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});
app.get("/", (req, res) => {
  //   res.send("<h1>here we are</h1>");
  res.render("home.hbs", {
    title: "Abhi to shyaam baaki hai ",
    info: "aur raat raazi hai ",
    current_year: new Date().getFullYear()
  });
});
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.get("/about", (req, res) => {
  //   res.send("<h1>here we are</h1>");
  res.render("about.hbs", {
    title: "About page",
    current_year: new Date().getFullYear()
  });
});
app.get("/bad", (req, res) => {
  //   res.send("<h1>here we are</h1>");
  res.send({
    error: "could not connect to server",
    code: 404
  });
});

app.listen(port, () => {
  console.log(`server is up at port ${port}`);
});
