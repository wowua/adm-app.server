const KoaRouter = require("koa-router");
const router = new KoaRouter();

const Task = require("./api/task");

router.post("/addTask", async ctx => {
  try {
    const result = await Task.addTask(ctx.request.body);
    ctx.body = result;
  } catch (error) {
    console.error("err", error);
    ctx.status = 500;
    ctx.body = "Internal Error";
  }
});

router.get("/", async ctx => {
  ctx.body = "it works";
});

module.exports = router;
