/*CMD
  command: /claimBot
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

var claimed = User.getProperty("claimed")

if (claimed === "Yes") {
  var claimedText = "<i>⚠️ You've already claimed.</i>"

  Api.sendMessage({
    text: claimedText,
    parse_mode: "html"
  })
  return
}

var text =
  "<b>✔️ For claiming this bot, you've join our telegram & youtube channels.</b>"
var buttons = [
  [
    {
      text: "👉 Telegram",
      url: "https://t.me/codingwithmohit"
    },
    {
      text: "👉 YouTube",
      url: "https://youtube.com/@codingwithmohit05"
    }
  ],
  [
    {
      text: "✅ Joined",
      callback_data: "/claimBot2"
    }
  ]
]

Api.sendMessage({
  text: text,
  reply_markup: {
    inline_keyboard: buttons
  },
  parse_mode: "html"
})

