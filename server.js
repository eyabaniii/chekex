const express = require("express");const App = express();
App.use(express.json());

App.use((req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentTime = currentDate.getHours();
  
    if (currentDay >= 1 && currentDay <= 5 && currentTime >= 9 && currentTime < 17) {
      next();
    } else {
      res.send("Service is currently offline. Please try again later.");
    }
  });
  
      
const PORT = 7000;
App.listen(PORT, (error) => {
  "";
  error ? console.log(error) : console.log("server created succeffuly");
});
App.set("view engine", "pug");

App.get("/OurServices", (req, res) => {
    res.render("OurServices");
  });
App.get("/HomePage", (req, res) => {
    res.render("HomePage");
  });
  App.get("/ContactUs", (req, res) => {
    res.render("ContactUs");
  });
    