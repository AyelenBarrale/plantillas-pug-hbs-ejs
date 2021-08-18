const express = require("express");
const app = express();

const handlebars = require("express-handlebars");

const productos = [
  /* {
    title: "cartuchera",
    price: 20,
    thumbnail: "url",
  },
  {
    title: "lapicero",
    price: 5,
    thumbnail: "url",
  },
  {
    title: "regla",
    price: 7,
    thumbnail: "url",
  }, */
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  "hbs",
  //función que incluye el objeto
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    // eslint-disable-next-line no-undef
    layoutsDir: __dirname + "/views/layouts",
    // eslint-disable-next-line no-undef
    partialsDir: __dirname + "/views/partials",
  })
);

app.use(express.static("public"));

app.set("views", "./src/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/productos", (req, res) => {
  res.render("productList", {
    productos,
  });
});

app.post("/productos", (req, res) => {
  const { body } = req;
  productos.push(body);
  res.send('<script>alert("Producto agregado")</script>');
});

const PORT = 8080;
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}/`)
);
