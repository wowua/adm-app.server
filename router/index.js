const KoaRouter = require("koa-router");
const combineRoutes = require("koa-combine-routers");

const wishesRoutes = require("./routes/wishes");
const authRoutes = require("./routes/auth");

module.exports = combineRoutes(wishesRoutes, authRoutes);
