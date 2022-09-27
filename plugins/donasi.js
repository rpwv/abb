let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Indosat:* [${global.ppulsa}]
│ • *Indosat:* [${global.ppulsa2}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Gopay:* [${global.pgopay}]
│ • *Dana:* [${global.pdana}]
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Saweria', url: psaweria}},
    {index: 2, urlButton: {displayText: 'Instagram', url: sig}},
    {index: 3, urlButton: {displayText: 'Offical Bot Group', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu Bot', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Creator Bot', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
