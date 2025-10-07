import 'dotenv/config';
import { createBot } from './bot.js';

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error('BOT_TOKEN is not defined in .env');
}

const bot = createBot(token);
bot.start();
