/*CMD
  command: /mainMenu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 🔍
  keyboard: 🔍 Search Number, 📊 Statistics\n📞 Support
  aliases: 
  group: 
CMD*/

var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>"

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  })
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"

  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  })
  return
}

var userName = user.first_name
var botLink = "@" + bot.name

Api.sendMessage({
  text: "<b>👋 Hello " +
  userName +
  ", welcome to " +
  botLink +
  ".\n\n💯 From this bot you can get information of any number easily in just one click.</b>\n\n<i>⚠️ Note : Don't miss use it else you'll be banned.</i>",
  parse_mode: "html"
});

