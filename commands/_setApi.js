/*CMD
  command: /setApi
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*✔️ Send your Truecaller Rapid Api key

👉 From here : https://numverify.com*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var api = message

  Bot.setProperty("api", api, "string")

  var text = "<b>✔️ Api set to : " + api + "</b>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })

  Bot.runCommand("/adminPanel")
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

