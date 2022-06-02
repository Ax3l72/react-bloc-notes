

exports.getUsers = async (req, res) => {
    let user = await db.query(`SELECT * FROM notes`)
    res.json({ users: user })
}

exports.addNotes = async (req, res) => {
    const { data }= req.body
    if(data.length > 16)return console.log('trop de caractère');
    await db.query(`INSERT INTO notes SET title=:data`,{data})
    res.json({ data: req.body })

}

exports.editNotes = async (req, res) => {
    const { id, data_title } = req.body
    console.log(req.params, req.body);
    await db.query(`UPDATE notes SET title=:data_title WHERE id=${id}`,{data_title})
    res.json({ data: req.body })

}

exports.deleteNotes = async (req, res) => {
    const { id }= req.body
    await db.query(`DELETE FROM notes WHERE id=${id}`)
    res.json({ data: req.body })

}