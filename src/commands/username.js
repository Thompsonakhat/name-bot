const usernameCommand = (ctx) => {
  const username = ctx.from.username ? ctx.from.username : 'No username set';
  ctx.reply(`Your username is: ${username}`);
};

module.exports = { usernameCommand };
const usernameCommand = (ctx) => {
  const username = ctx.from.username ? ctx.from.username : 'No username';
  ctx.reply(`Your username is: ${username}`);
};

module.exports = { usernameCommand };
