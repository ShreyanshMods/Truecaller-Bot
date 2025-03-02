/*CMD
  command: /searchNumber
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

//Bot.inspect(JSON.parse(content))
/*
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

if (!content) {
  return
}

try {
  var prompt = JSON.parse(content)
  var data = prompt.data[0]
  var image = data.image
  var name = data.name
  var gender = data.gender
  var number = data.phones[0].e164Format
  var numberType = data.phones[0].numberType
  var carrier = data.phones[0].carrier
  var type = data.phones[0].type
  var country = data.addresses[0].address
  var state = data.addresses[0].city
  var timeZone = data.addresses[0].timeZone
  var email = data.internetAddresses[0].id
  var botLink = "@" + bot.name
  var text =
    "<b>🙋 Name : " +
    name +
    "\n👫 Gender : " +
    gender +
    "\n\n📞 Number : " +
    number +
    "\n👉 Number type : " +
    numberType +
    "\n📱 Carrier : " +
    carrier +
    "\n💻 Type : " +
    type +
    "\n\n🚩 Country : " +
    country +
    "\n🔍 State : " +
    state +
    "\n⌚ Time zone : " +
    timeZone +
    "\n\n🛡️ Email : " +
    email +
    "\n\nℹ️ Information generated by : " +
    botLink +
    "</b>"

  if (image === undefined) {
    Api.sendMessage({
      text: text,
      parse_mode: "html"
    })

    Bot.runCommand("/mainMenu")

    var userName = user.first_name
    var username = "@" + user.username
    var userID = user.telegramid
    var adminText =
      "<b>🆕 New number searched\n\n🧒 By : " +
      userName +
      "\n👉 Username : " +
      username +
      "\n🆔 User ID :</b> <code>" +
      userID +
      "</code>\n\n➖➖➖➖➖➖➖➖➖➖\n\n" +
      text
    var admin = Bot.getProperty("admin")

    Api.sendMessage({
      chat_id: admin,
      text: adminText,
      parse_mode: "html"
    })
  } else {
    Api.sendPhoto({
      photo: image,
      caption: text,
      parse_mode: "html"
    })

    Bot.runCommand("/mainMenu")

    var userName = user.first_name
    var username = "@" + user.username
    var userID = user.telegramid
    var adminText =
      "<b>🆕 New number searched\n\n🧒 By : " +
      userName +
      "\n👉 Username : " +
      username +
      "\n🆔 User ID :</b> <code>" +
      userID +
      "</code>\n\n➖➖➖➖➖➖➖➖➖➖\n\n" +
      text
    var admin = Bot.getProperty("admin")

    Api.sendMessage({
      chat_id: admin,
      text: adminText,
      parse_mode: "html"
    })
  }
} catch (error) {
  //var error = prompt.message.split(".")
  //var noURL = error[0]
  //var errorText = "<b>Error occured :</b>\n<i>" + noURL + "</i>"

  Api.sendMessage({
    text: error,
    parse_mode: "html"
  })

  Bot.runCommand("/mainMenu")
}
*/

//Bot.inspect(JSON.parse(content));

try {
  const data = JSON.parse(content);
  const number = data.number;
  const localFormat = data.local_format;
  const internationalFormat = data.international_format;
  const countryPrefix = data.country_prefix;
  const countryCode = data.country_code;
  const countryName = data.country_name;
  const location = data.location;
  const carrier = data.carrier;
  const lineType = data.line_type;
  const text = `<b>» Number :</b> <code>${number}</code>\n<b>» Local format :</b> <code>${localFormat}</code>\n<b>» International format :</b> <code>${internationalFormat}</code>\n<b>» Country prefix :</b> <code>${countryPrefix}</code>\n<b>» Country code :</b> <code>${countryCode}</code>\n<b>» Country name :</b> <code>${countryName}</code>\n<b>» Location :</b> <code>${location}</code>\n<b>» Carrier :</b> <code>${carrier}</code>\n<b>» Line type :</b> <code>${lineType}</code>\n\n<b>ℹ️ Information generated by : @${bot.name}</b>`;
  
  Api.sendMessage({
    text: `<b>🔍 Your search results -</b>\n\n${text}`,
    parse_mode: "html"
  });
  
  Bot.runCommand("/mainMenu");
  
  Api.sendMessage({
    chat_id: Bot.getProperty("admin"),
    text: `<b>🔍 New number searched\n\n» By : ${user.first_name}\n» Username : @${user.username ? user.username : " Unknown"}\n» User link : <a href="tg://user?id=${user.telegramid}">User link</a>\n» User ID :</b> <code>${user.telegramid}</code>\n\n${text}`,
    parse_mode: "html"
  });
} catch (error) {
  Api.sendMessage({
    text: `<b>⚠️ Error :</b> <i>${error}</i>`,
    parse_mode: "html"
  });
}
