const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hello World</h2>");
});

app.get("/login", (req, res) => {
  res.send("<h2>This is Login Page!!</h2>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
