let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}āāć ššš ššš ć\n` + users.map(v => 'āāŖ @' + v.replace(/@.+/, '')).join`\n` + '\nāāāāā', null, {
        mentions: users
    })
}

handler.help = ['o-tagall']
handler.tags = ['owner']
handler.command = ['o-tagall']
handler.owner = true
handler.group = true

export default handler
