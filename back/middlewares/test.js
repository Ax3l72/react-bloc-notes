
exports.testMD = (req, res, next) => {
    console.log('test middleware')
    next()
}
