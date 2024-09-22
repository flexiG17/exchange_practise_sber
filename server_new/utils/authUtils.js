const db = require('../db')

module.exports.create = (modal) => {
    return db('users').insert(modal)
}

module.exports.get = (condition = {}) => {
    return db('users').where(condition)
}

module.exports.update = (user_id, modal) => {
    return db('users').where({user_id}).update(modal)
}

module.exports.delete = (user_id) => {
    return db('users').where({user_id}).delete()
}
