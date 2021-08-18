const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("views", "./src/views");
app.set("view engine", "ejs");

let productos = [];

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/productos", (req, res) => {
    res.render("pages/productList", {
      productos
    });
  });

app.post("/productos", (req, res) => {
    const {body} = req
    productos.push(body)
    res.send('<script>alert("Producto agregado");windows.location.href="/";</script>')
})

const PORT = 8080;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}/`))