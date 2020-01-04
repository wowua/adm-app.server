require("dotenv").config();

const koaRouter = require("koa-router");
const router = new koaRouter({ prefix: "/auth" });
const axios = require("axios");

const { VK_CLIENT_ID, VK_REDIRECT_URL, VK_SECRET_KEY } = process.env;

router.post("/", async ctx => {
  const authLink = `https://oauth.vk.com/authorize?client_id=${VK_CLIENT_ID}&display=page&redirect_uri=${VK_REDIRECT_URL}&scope=friends&response_type=code&v=5.103`;
  ctx.body = {
    url: authLink
  };
});

router.post("/code", async ctx => {
  const { code } = ctx.request.body;
  const accessUrl = `https://oauth.vk.com/access_token?client_id=${VK_CLIENT_ID}&client_secret=${VK_SECRET_KEY}&redirect_uri=${VK_REDIRECT_URL}&code=${code}`;

  try {
    const { data } = await axios.get(accessUrl);
    const fields = ["screen_name", "sex", "bdate", "photo_big"].join(",");
    const getUserInfoUrl = `https://api.vk.com/method/users.get?user_id=${data["user_id"]}&fields=${fields}&v=5.52&access_token=${data["access_token"]}`;

    const response = await axios.get(getUserInfoUrl);
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }

  return (ctx.body = "success");
});

module.exports = router;
