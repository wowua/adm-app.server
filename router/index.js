const KoaRouter = require("koa-router");
const combineRoutes = require("koa-combine-routers");

const wishesRoutes = require("./routes/wishes");

module.exports = combineRoutes(wishesRoutes);
