const { Telegraf } = require('telegraf');
const dotEnv = require('dotenv');
dotEnv.config();
const Express = require('express');
const { message } = require('telegraf/filters');
const app = Express();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Xabar yuboring"));

bot.on(message(), async (ctx) => {

  const replyData = ctx.message
  console.log(ctx)
  const replyDataJson = JSON.stringify(replyData, null, 2);

  await ctx.reply(`\`\`\`json\n${replyDataJson}\n\`\`\``, { parse_mode: 'Markdown' });



});
 bot.launch();

app.listen("3000", () => {
  console.log("Server running on PORT: 3000");
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
