const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.use(express.static("public"));

app.get("/bacheca", (req, res) => {
  res.json([
    {
      name: "Ciambellone",
      image: `http://localhost:3000/cibi/ciambellone.jpeg`,
      taste_scale: "7/10",
    },
    {
      name: "cracker barbabietola",
      image: `http://localhost:3000/cibi/cracker_barbabietola.jpeg`,
      taste_scale: "6/10",
    },
    {
      name: "pane fritto dolce",
      image: `http://localhost:3000/cibi/pane_fritto_dolce.jpeg`,
      taste_scale: "9/10",
    },
    {
      name: "pasta barbabietola",
      image: `http://localhost:3000/cibi/pasta_barbabietola.jpeg`,
      taste_scale: "8/10",
    },
    {
      name: "torta paesana",
      image: `http://localhost:3000/cibi/torta_paesana.jpeg`,
      taste_scale: "10/10",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
