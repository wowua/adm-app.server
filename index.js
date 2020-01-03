const Koa = require("koa");
const app = new Koa();
const koaCors = require("koa-cors");

require("dotenv").config();
require("./db");

const koaBody = require("koa-body");
const router = require("./router");

app.use(koaBody());
app.use(koaCors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
