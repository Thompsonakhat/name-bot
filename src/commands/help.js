export default function helpCommand(bot) {
  bot.command('help', (ctx) => {
    ctx.reply('Available commands: /start, /help, /name');
  });
}