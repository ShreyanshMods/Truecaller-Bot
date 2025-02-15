/*CMD
  command: /check2
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

if (!options) {
  return
}

var status = options.result.status
var channel2 = "@" + Bot.getProperty("channel2")

if (status === "member" || status === "administrator" || status === "creator") {
  User.setProperty("joined", "Yes", "string")
  
  Bot.sendMessage("Joined : " + channel2)

  Bot.runCommand("/mainMenu")
} else {
  Bot.runCommand("/start")
}

