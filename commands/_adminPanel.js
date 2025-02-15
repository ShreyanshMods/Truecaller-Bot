/*CMD
  command: /adminPanel
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

var admin = 6040616626
var userID = user.telegramid
var botLink = "@" + bot.name

if (userID === admin) {
  var adminName = user.first_name
  var text =
    "<b>👋 Hello " +
    adminName +
    ", welcome to the admin panel of " +
    botLink +
    ".</b>"
  var maintenanceStatus = Bot.getProperty("maintenanceStatus")
  var api = Bot.getProperty("api")
  var buttons = [
    [
      {
        text: "🚫 Ban user",
        callback_data: "/banUser"
      },
      {
        text: "✔️ Unban user",
        callback_data: "/unbanUser"
      }
    ],
    [
      {
        text: "🛠️ Set maintenance status : " + maintenanceStatus,
        callback_data: "/setMaintenanceStatus"
      }
    ],
    [
      {
        text: "🏘️ Set channels",
        callback_data: "/setChannels"
      },
      {
        text: "📢 Broadcast",
        callback_data: "/broadcast"
      }
    ],
    [
      {
        text: "✔️ Set api : " + api,
        callback_data: "/setApi"
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
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

