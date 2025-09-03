const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEd1cWR0c2Q5M0RKa3VxZzZEajdET2Z1NWpDWkthQ1FmUkFvRHYyM2ZIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1d2U3Q3SklHZlhDOTNremU0dEpVRk03OURXZXM3TGhBaUZYa0ZVRUNEZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TnZrdkdyVTNOaFI0RjdvNDZ1VllBVDlTaFo3M2R4bnI0V0tBQjcwaUVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxNmdTMUFMSmdJVk5ma1VCRW9pNTcxeVhtbDEvYjJtMW8waGVaUHpvYTJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMblZHZ3h6YUxuS1FLSVNrNU0weFlKTUxxTHAzS1g0Mjk2MzlNSTFUMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IksxQmRTSGdSU2RvRXZiby9CV1hRbFFtOUFSV1plcUpDTmVGb1JzQjlwQWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJkUmpHWDBZd05icFNoZkQxNDJBZ000bmV5Q0F0U0ZkbmJURGlUc1pHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmpQRDdBUnFNcVV0WEsvWjFUMDUvN3pBNzRhcmlxcXViT1d6R0FiYlZpQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJzZTNTRGdEQlU1dnl2OVd6RW9CYVlJLzNPV3plVEUvMVo5WS9QVFRIT1ByS1NCUm9QVHJ1dEYyWDZmcWRSYnVJczVvcDRXdm8zQXI1U29oQjR1T2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6IlcxOFhVcDRENE1aOS9DK2padkd2a0I5Rm1odkxiODh0WHNnRGlFV0VKblE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzY1MTY5NjYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ4QkE2MzQwNTIyNzQyQkI5RDZFNjg0NDk1OTY5Q0Q3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY5MDE2MjR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM2NTE2OTY2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1RTQ4QzNBQkI5NTlEMjVCM0VDMDJEMDk3NTRCMUNENSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2OTAxNjI0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFRElUSDEyMyIsIm1lIjp7ImlkIjoiOTIzMzY1MTY5NjYwOjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjQ4NDU0ODQxMDU4NTY6NkBsaWQiLCJuYW1lIjoiSGFzc25haW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0kzVm52RUJFUERoNE1VR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImF5RVpBNlNnamlaWlBHVmdaVFQ0bmR0ajAwaXNIM1pBWW1qRENnR3dDRHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFMNXNRSlduMzBEbHZXcThpd1hlNmJKWjhpSmQ4M3pwTndKd2NCNzE0RUxYK1JaTHMxQ0N2OTlzY2RJMVlnV1VqRXRDbG9SUXV4RG9KaGVzNzh4S0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLOENhU1c0d1YreG5OWDFxVko1aFVQMllMNHdFRUJIdmgrWGR5OHhRcDN2MmZEeVFpLy96TlViSW1iajVQS0wzd2R3Q29mMDJrWGhTa0cwRFFZK3Vodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM2NTE2OTY2MDo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldzaEdRT2tvSTRtV1R4bFlHVTArSjNiWTlOSXJCOTJRR0pvd3dvQnNBZzgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjkwMTYyMCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEK3EifQ==",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS Hassnain-Farooq*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923097580232",
  OWNER_NAME: process.env.OWNER_NAME || "Hassnain",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
 BOTMODE: process.env.BOTMODE || "button",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923365169660",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
