let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}ββγ ππ΄πΊ π΄πΏπΏ γ\n` + users.map(v => 'ββ¦β @' + v.replace(/@.+/, '')).join`\n` + '\nβββββ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
