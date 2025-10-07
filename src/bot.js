import { Bot } from 'grammy';
import startCommand from './commands/start.js';
import helpCommand from './commands/help.js';
import nameCommand from './commands/name.js';

export function createBot(token) {
  const bot = new Bot(token);
  startCommand(bot);
  helpCommand(bot);
  nameCommand(bot);
  return bot;
}