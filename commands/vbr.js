/*CMD
  command: vbr
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.getProperty("cena");
User.getProperty("tov");
User.getProperty("citi");
var bt=User.getProperty("cena")/240815;
var lt=User.getProperty("cena")/1845;
var rub=User.getProperty("cena");
var btc=(bt.toFixed(5));
var ltc=(lt.toFixed(5));
User.setProperty("btc", btc, "text");
User.setProperty("ltc", ltc, "text");
Bot.sendKeyboard("6⃣ На банковскую карточку = 💰"+rub+"руб, \n7⃣ Bitcoin ="+btc+" BTC, \n8⃣Litecoin ="+ltc+" LTC, \n⬅⬅ Назад", "\nВы выбрали: <tov> в районе <citi>\nВыберете способ оплаты:\n\nНа банковскую карточку = (<cena>руб) - ответ - /6\nBitcoin = (<btc> BTC) - ответ - /7\nLitecoin = (<ltc> LTC) - ответ - /8");
Bot.runCommand("delay");
