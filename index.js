const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesControlles");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

// VIEW ENGINE 
app.set('view engine', 'ejs');

// Express aceitar trabalhar com arquivos estáticos
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({extendd: false}));
app.use(bodyParser.json());

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error);
    });

app.use("/",categoriesController);

app.use("/", articlesController);

app.get("/", (req, res) => {
    res.render("index");
});

// Porta
app.listen(8080, () => {
    console.log("O servidor está rodando");
});