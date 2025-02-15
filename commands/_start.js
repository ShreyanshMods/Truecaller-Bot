/*CMD
  command: /start
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

var newUser = User.getProperty("newUser")

if (!newUser) {
  User.setProperty("newUser", "Yes", "string")

  var admin = Bot.getProperty("admin")
  var userName = user.first_name
  var username = "@" + user.username
  var userID = user.telegramid
  var userLink = "<a href='tg://user?id=" + userID + "'>" + userName + "</a>"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")

  status.add(1)

  var adminText =
    "<b>🆕 New user notification 🆕\n\n👩‍💻 Name : " +
    userName +
    "\n👉 Username : " +
    username +
    "\n🔗 User link : " +
    userLink +
    "\n🆔 User ID :</b> <code>" +
    userID +
    "</code>\n\n<b>📊 Total users :</b> <code>" +
    status.value() +
    "</code>"

  Api.sendMessage({
    chat_id: admin,
    text: adminText,
    parse_mode: "html"
  })

  /*var url = "https://api.projectoid.site/v1/telegram/botpanel/adduser.php"
  var botID = bot.token.split(":")[0]
  var accessToken = "bIgJdTIcTVvP66VEwxpCXCMeOAgTfHAL" // Generate it from https://projectoid.site/services/telegram/bot/register

  HTTP.post({
    url: url,
    body: {
      bot_id: botID,
      access_token: accessToken,
      user_id: userID
    }
  })*/
}

var broadcast = Bot.getProperty("Broadcast") ? Bot.getProperty("Broadcast") : []

if (!broadcast.includes(user.telegramid)) {
  broadcast.push(user.telegramid)
  Bot.setProperty("Broadcast", broadcast, "json")
}

var channel1 = Bot.getProperty("channel1")
var channel2 = Bot.getProperty("channel2")
/*var channel3 = Bot.getProperty("channel3")
var channel4 = Bot.getProperty("channel4")
var channel5 = Bot.getProperty("channel5")
var channel6 = Bot.getProperty("channel6")*/
var photo = "https://ibb.co/VVLvf50"
var text =
  "<b>💯 In order to start the bot you must have to join our channel(s).</b>"

if (channel1 === undefined) {
  Bot.runCommand("/mainMenu")
} else if (channel2 === undefined) {
  var buttons = [
    [
      {
        text: "↗️ Join",
        url: "https://t.me/" + channel1
      }
    ],
    [
      {
        text: "✅ Joined",
        callback_data: "/joined"
      }
    ]
  ]

  Api.sendPhoto({
    photo: photo,
    caption: text,
    reply_markup: {
      inline_keyboard: buttons
    },
    parse_mode: "html"
  })
} else {
  var buttons = [
    [
      {
        text: "↗️ Join",
        url: "https://t.me/" + channel1
      },
      {
        text: "↗️ Join",
        url: "https://t.me/" + channel2
      }
    ],
    [
      {
        text: "✅ Joined",
        callback_data: "/joined"
      }
    ]
  ]

  Api.sendPhoto({
    photo: photo,
    caption: text,
    reply_markup: {
      inline_keyboard: buttons
    },
    parse_mode: "html"
  })
}

