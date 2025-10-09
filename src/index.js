const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');
const nameCommand = require('./commands/name');
const usernameCommand = require('./commands/username');

bot.start(startCommand);
bot.help(helpCommand);
bot.command('name', nameCommand);
bot.command('username', usernameCommand);

bot.launch();

console.log('Bot is running...');