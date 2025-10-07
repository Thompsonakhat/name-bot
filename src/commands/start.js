export default function startCommand(bot) {
  bot.command('start', (ctx) => {
    ctx.reply('Welcome to the bot! Use /help to see available commands.');
  });
}