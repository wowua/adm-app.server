const koaRouter = require("koa-router");
const router = new koaRouter({ prefix: "/wishes" });
const Wishes = require("../../api/wishes");

router.post("/", async ctx => {
  try {
    const result = await Wishes.add(ctx.request.body);
    ctx.body = result;
  } catch (error) {
    console.error("err", error);
    ctx.status = 500;
    ctx.body = "Internal Error";
  }
});

router.get("/", async ctx => {
  try {
    const result = await Wishes.get(ctx.request.body);
    ctx.body = result;
  } catch (error) {
    console.error("err", error);
    ctx.status = 500;
    ctx.body = "Internal Error";
  }
});

module.exports = router;
