const multer = require('multer')
const path = require('path')
const fs = require('fs')
const os = require('os')
const jwtDecode = require('jwt-decode')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const type = req.body.type
        let pathToSave = './uploads'

        const token = req.get('Authorization')
        let decodedToken = ''
        if (token)
            decodedToken = jwtDecode(token)

        switch (type) {
            case 'createUser': {
                pathToSave = `${pathToSave}/users`
                if (!fs.existsSync(pathToSave))
                    fs.mkdirSync(pathToSave)
            } break
            case 'createEvent': {
                pathToSave = `${pathToSave}/events`
                if (!fs.existsSync(pathToSave))
                    fs.mkdirSync(pathToSave)
            } break
            case 'createQuest': {
                pathToSave = `${pathToSave}/quests`
                if (!fs.existsSync(pathToSave))
                    fs.mkdirSync(pathToSave)
            } break
            case 'userQuestAnswer': {
                pathToSave = `${pathToSave}/quests/${req.body.quest_id}/${decodedToken.user_id}`
                if (!fs.existsSync(pathToSave))
                    fs.mkdirSync(pathToSave)
            } break
        }
        cb(null, pathToSave)
    },

    filename: function (req, file, cb) {
        if (!/[^\u0000-\u00ff]/.test(file.originalname)) {
            file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
        }

        cb(null, file.originalname)
    },
})

module.exports = multer({storage})