/*CMD
  command: 📊 Statistics
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

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
var botLink = "@" + bot.name
var photo = "https://ibb.co/nNhw76dK"
var caption =
  "<b>📊 Statistics of " +
  botLink +
  "\n\n🙋 Total users : " +
  status.value() +
  "\n\n👑 Bot coder : @SmartEdith_Bot\n\n🔥 Join our coding channel : @Tech_Shreyansh</b>"

Api.sendPhoto({
  photo: photo,
  caption: caption,
  parse_mode: "html"
})

