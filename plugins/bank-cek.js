let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
โงใ *B A N K* ใ
โ ๐ *Nama:* ${user.registered ? user.name : conn.getName(m.sender)}
โ ๐ณ *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : 'โ๏ธ'}
โ ๐๏ธ *Bank:* ${user.bank} ๐ฒ / ${user.fullatm} ๐ฒ
โ ๐น *Uang:* ${user.money} ๐ฒ
โ ๐ค *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : 'โ๏ธ'}
โ ๐ *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Gratisan'}
โ ๐ *Registered:* ${user.registered ? 'Ya':'Tidak'}
โโโยทยทยท
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/0451b07945f7f9633b59b.jpg', [`Inventory`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler
