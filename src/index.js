const { Bot } = require('grammy');
const bot = new Bot(process.env.BOT_TOKEN);

const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');
const nameCommand = require('./commands/name');
const usernameCommand = require('./commands/username');

bot.command('start', startCommand);
bot.command('help', helpCommand);
bot.command('name', nameCommand);
bot.command('username', usernameCommand);

bot.start();