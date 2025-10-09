const { startCommand } = require('./commands/start');
const { helpCommand } = require('./commands/help');
const { nameCommand } = require('./commands/name');
const { usernameCommand } = require('./commands/username');

const commands = {
  start: startCommand,
  help: helpCommand,
  name: nameCommand,
  username: usernameCommand
};

module.exports = commands;
