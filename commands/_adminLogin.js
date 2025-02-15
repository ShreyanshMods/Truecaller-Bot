/*CMD
  command: /adminLogin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = 6910445402
var userID = user.telegramid
var botLink = "@" + bot.name

if (userID === admin) {
  Bot.setProperty("admin", admin, "integer")

  var text =
    "<b>✅ You're promoted as the admin of " +
    botLink +
    " successfully.\n\n👉 Now you can access the Admin Panel by Sending /adminPanel</b>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })
} else {
  var notAdminText = "<i>⚠️ You're not the Admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

