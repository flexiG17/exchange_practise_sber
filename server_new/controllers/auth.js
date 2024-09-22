const User = require('../models/User')
const auth = require('../utils/authUtils')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require("fs");

module.exports.login = async (req, res) => {
    const {email, password} = req.body

    const [user] = await auth.get({email})

    if (!user)
        return res.status(404).json({
            message: 'Пользователь с таким email не зарегистрирован'
        })

    if (!bcrypt.compareSync(password, user.password))
        return res.status(401).json({
            message: 'Пароль неверный'
        })

    const token = jwt.sign({
        user_id: user.user_id,
        email: user.email,
        name: user.name,
        role: user.role
    }, process.env.TOKEN_SECRET, {})

    return res.status(200).json({
        token: `Bearer ${token}`
    })
}

module.exports.register = async (req, res) => {
    const userModal = new User(req.body).getModal()

    await auth.create(userModal)
        .then(async (result) => {
            fs.mkdirSync(`./uploads/users/${result[0]}`)
            fs.mkdirSync(`./uploads/users/${result[0]}/image`)
            if (req.files[0]) {
                fs.rename(
                    `./uploads/users/${req.files[0].filename}`,
                    `./uploads/users/${result[0]}/image/${req.files[0].filename}`,
                    err => {
                        if (err) throw err
                    })
                await auth.update(result[0], {image: `/users/${result[0]}/image/${req.files[0].filename}`})
            }
            return res.status(201).json({
                message: 'Регистрация прошла успешно',
                id: result[0]
            })
        })
        .catch(error => {
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({message: `Пользователь с почтой ${req.body.email} уже зарегистрирован в системе`})
            }
            else
                return res.status(500).json(error.message)
        })
}

module.exports.createUser = async (req, res) => {
    const currentUser = req.user
    const userModal = new User(req.body).getModal()

    if (currentUser.role === 'Администратор')
        await auth.create(userModal)
            .then(async (result) => {
                fs.mkdirSync(`./uploads/users/${result[0]}`)
                fs.mkdirSync(`./uploads/users/${result[0]}/image`)
                fs.rename(
                    `./uploads/users/${req.files[0].filename}`,
                    `./uploads/users/${result[0]}/image/${req.files[0].filename}`,
                    err => {
                        if (err) throw err
                    })
                await auth.update(result[0], {image: `/users/${result[0]}/image/${req.files[0].filename}`})

                return res.status(201).json({
                    message: 'Пользователь успешно создан',
                    id: result[0]
                })
            })
            .catch(error => {
                if (error.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({message: `Пользователь с почтой ${req.body.email} уже зарегистрирован в системе`})
                }
                else
                    return res.status(500).json(error.message)
            })
    else return res.status(403).json({message: 'Отказано в доступе'})
}

module.exports.update = async (req, res) => {
    const userId = req.params.id
    const currentUser = req.user
    const userModal = new User(req.body).getModal()

    if (userId === currentUser.user_id || currentUser.role === 'Администратор') {
        await auth.update(userId, userModal)
            .then((result) => {
                return res.status(201).json({
                    message: 'Данные успешно изменены',
                    result
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                })
            })
    } else
        return res.status(403).json({message: 'Отказано в доступе'})
}

module.exports.delete = async (req, res) => {
    const userId = req.params.id
    const currentUser = req.user

    if (currentUser.role === 'Администратор')
        await auth.delete(userId)
            .then(result => {
                return res.status(200).json({
                    message: 'Пользователь удален',
                    result
                })
            })
    else
        return res.status(403).json({message: 'Отказано в доступе'})
}

module.exports.getAll = async (req, res) => {
    const currentUser = req.user

    if (currentUser.role === 'Администратор'){
        await auth.get()
            .then(result => {
                return res.status(200).json(result)
            })
    }
    else
        return res.status(403).json({message: 'Отказано в доступе'})
}

module.exports.getById = async (req, res) => {
    const currentUser = req.user
    const userId = +req.params.id

    if (userId === +currentUser.user_id || currentUser.role === 'Администратор'){
        await auth.get({user_id: userId})
            .then(result => {
                return res.status(200).json(result)
            })
    }
    else
        return res.status(403).json({message: 'Отказано в доступе'})
}