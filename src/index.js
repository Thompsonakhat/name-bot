// Importing necessary modules
const { startCommand } = require('./commands/start');
const { nameCommand } = require('./commands/name');
const { helpCommand } = require('./commands/help');
const { usernameCommand } = require('./commands/username');

// Bot initialization and command wiring
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(startCommand);
bot.command('name', nameCommand);
bot.command('help', helpCommand);
bot.command('username', usernameCommand);

bot.launch();