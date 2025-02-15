/*CMD
  command: 🔍 Search Number
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*🔍 Send number with country code

👉 Example :* `IN 9999999999`

*🔥 List of country codes : https://tinyurl.com/2yt2662e*
  ANSWER
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

var prompt = message.split(" ")
var countryCode = prompt[0]
var number = prompt[1]

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

if (!isNumeric(number)) {
  var notNumberText =
    "<i>⚠️ Send only phone number together with country code.\n\n👉 Example :</i> <code>IN 9999999999</code>"

  Api.sendMessage({
    text: notNumberText,
    parse_mode: "html"
  })

  Bot.runCommand("🔍 Search Number")
  return
}
/*
var url =
  "https://truecaller4.p.rapidapi.com/api/v1/getDetails?phone=" +
  number +
  "&countryCode=" +
  countryCode

var host = "truecaller4.p.rapidapi.com"

HTTP.get({
  url: url,
  headers: {
    "X-RapidAPI-Key": api,
    "X-RapidAPI-Host": host
  },
  success: "/searchNumber"
})
*/

HTTP.get({
  url: `http://apilayer.net/api/validate?access_key=${Bot.getProperty("api")}&number=${number}&country_code=${countryCode}&format=1`,
  success: "/searchNumber"
});
