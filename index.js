const Koa = require("koa");
const app = new Koa();
const koaCors = require("koa-cors");
const router = require("./router");
const koaBody = require("koa-body");

require("dotenv").config();
require("./db");

app.use(koaBody());
app.use(koaCors());
app.use(router());

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
