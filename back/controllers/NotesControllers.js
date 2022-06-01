

exports.getUsers = async (req, res) => {
    let user = await db.query(`SELECT * FROM user`)
    // console.log("user",user)
    res.json({ users: user })

}

exports.addNotes = async (req, res) => {
    const { data }= req.body
    console.log(data)
    if(data.length > 16)return console.log('trop de caractère');
    await db.query(`INSERT INTO user SET username=:data`,{data})
    res.json({ data: req.body })

}

exports.editNotes = async (req, res) => {
    const { data, data_edit }= req.body
    console.log(data);
    await db.query(`UPDATE user SET username=:data_edit WHERE username=:data`,{data,data_edit})
    res.json({ data: req.body })

}

exports.deleteNotes = async (req, res) => {
    const { data_del }= req.body
    console.log("del",req.body)
    await db.query(`DELETE FROM user WHERE username=:data_del`,{data_del})
    res.json({ data: req.body })

}