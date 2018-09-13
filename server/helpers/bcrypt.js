const bcrypt = require('bcryptjs')

function hash(pass) {
    return bcrypt.hashSync(pass,8)
}
module.exports = hash