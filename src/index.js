const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const helpCommand = require('./commands/help');
const startCommand = require('./commands/start');
const nameCommand = require('./commands/name');
const usernameCommand = require('./commands/username');

bot.start(startCommand);
bot.help(helpCommand);
bot.command('name', nameCommand);
bot.command('username', usernameCommand);

bot.launch();

console.log('Bot is running...');

const { usernameCommand } = require('./commands/username');

bot.command('username', usernameCommand);