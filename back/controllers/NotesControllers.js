

exports.getUsers = async (req, res) => {
    let user = await db.query(`SELECT * FROM user`)
    console.log("user",user)
    res.json({ users: user })

}

exports.addNotes = async (req, res) => {
    const { note_add }= req.body
    console.log(note_add)
    await db.query(`INSERT INTO user SET username=:note_add`,{note_add})
    res.json({ data: req.body })

}