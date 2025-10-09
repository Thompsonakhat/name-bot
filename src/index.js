const { Bot } = require('grammy');
const bot = new Bot(process.env.BOT_TOKEN);

const helpCommand = require('./commands/help');
const startCommand = require('./commands/start');
const nameCommand = require('./commands/name');
const usernameCommand = require('./commands/username');

bot.command('help', helpCommand);
bot.command('start', startCommand);
bot.command('name', nameCommand);
bot.command('username', usernameCommand);

bot.start();