export default function nameCommand(bot) {
  bot.command('name', (ctx) => {
    const userName = ctx.from.first_name || 'User';
    ctx.reply(`Your name is: ${userName}`);
  });
}