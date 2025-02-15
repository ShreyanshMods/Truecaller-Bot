/*CMD
  command: 📞 Support
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *❓ How can I help you?*
  keyboard: ❌ Cancel
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

var support = message
var admin = Bot.getProperty("admin")
var userName = user.first_name
var userID = user.telegramid
var username = "@" + user.username
var userText =
  "<b>📞 Support message sent to admin. He'll reply soon.\n\n👉 Message :</b> <i>" +
  support +
  "</i>"

Api.sendMessage({
  text: userText,
  parse_mode: "html"
})

Bot.setProperty("replyID", userID, "integer")

Bot.runCommand("/mainMenu")

var adminText =
  "<b>🆕 New support message 📞\n\n🧑 User : " +
  userName +
  "\n👉 Username : " +
  username +
  "\n🆔 User ID :</b> <code>" +
  userID +
  "</code>\n\n<b>📞 Message :</b> <i>" +
  support +
  "</i>"
var button = [
  [
    {
      text: "Reply to " + userName,
      callback_data: "/reply " + userID
    }
  ]
]

Api.sendMessage({
  chat_id: admin,
  text: adminText,
  reply_markup: {
    inline_keyboard: button
  },
  parse_mode: "html"
})

