const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "database",
  cooldown: 10,
  description: i18n.__("ping.description"),
  execute(message) {
    message
      .reply(i18n.__mf("https:www.thisworldthesedays.com/database5.html", { ping: Math.round(message.client.ws.ping) }))
      .catch(console.error);
  }
};
