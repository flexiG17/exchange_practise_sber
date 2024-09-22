const fs = require("fs");
const path = require("path");

const File = require('../models/File')
const db = require('../db')
const mv = require("mv")

const uploadPath = process.env.UPLOAD_PATH

module.exports = new class FileManagerService {
    async createDir(file) {
        const studentFile = await this.createStudentDir(file.student_id, file.user_id)

        let parentFile = await db.files.where({id: file.parent_id}).first();

        if (!parentFile) {
            parentFile = studentFile
            file.parent_id = studentFile.id;
        }

        const filePath = path.join(parentFile.path, file.name)

        file = new File({
            name: file.name,
            type: "dir",
            path: filePath,
            date: new Date(),
            user_id: file.user_id,
            student_id: file.student_id,
            parent_id: file.parent_id
        })

        await db.files.insert(file).onConflict('path').merge()
        if (!fs.existsSync(filePath))
            fs.mkdirSync(filePath)

        return file
    }

    getNewDirPath(stringArray) {
        return path.join(uploadPath, stringArray)
    }

    async createStudentDir(user_id, event_id, quest_id, user_quest_answer_id) {
        const student = await db.students.where({id: student_id}).first()

        if (!student)
            throw new Error("Студент не найден")

        const studentPath = this.getNewDirPath(user_id)

        if (!fs.existsSync(studentPath))
            fs.mkdirSync(studentPath)

        let model = new File({
            name: student.id,
            type: "dir",
            path: studentPath,
            date: new Date(),
            user_id: user_id,
            student_id: student.id
        })

        const [studentFileId] = await db.files.insert(model).onConflict('path').merge()
        return db.files.where({id: studentFileId}).first()
    }

    createUserQuestAnswerDir(quest_id, user_id, user_quest_answer_id) {
        let userQuestAnswerPath = path.join(uploadPath, 'quests', quest_id.toString(), user_quest_answer_id.toString())
        if (!fs.existsSync(userQuestAnswerPath))
            fs.mkdirSync(userQuestAnswerPath)

        /*return new File({
            name: user_quest_answer_id,
            type: "dir",
            path: eventDirPath,
            date: new Date(),
            user_id: user_id,
            quest_id: quest_id,
            user_quest_answer_id: user_quest_answer_id
        })*/

        return userQuestAnswerPath
    }

    async uploadUserQuestFiles(files, quest_id, user_id, user_quest_answer_id) {
        const userQuestAnswerPath = this.createUserQuestAnswerDir(quest_id, user_id, user_quest_answer_id)

        mv(files[0].path, userQuestAnswerPath, function (err) {
            if (err)
                console.log(err);
        })

        /*const model = new File({
            name: file.originalname,
            size: file.size,
            type: "file",
            path: userQuestAnswerPath,
            parent_id: parent.id,
            user_id: user_id,
            student_id: parent.student_id,
            date: new Date()
        })*/
    }

    async deleteStudentDirs(students_id) {
        const studentPaths = students_id.map(student_id => this.getNewDirPath(student_id))
        let studentFiles = await db.files.whereIn("path", studentPaths)

        return this.deleteFiles(studentFiles.map(studentFile => studentFile.id))
    }

    async deleteFiles(file_ids) {
        const files = await db.files.whereIn('id', file_ids)

        for (const file of files) {
            if (fs.existsSync(file.path))
                fs.rmSync(file.path, {recursive: true})
        }
        await db.files.whereIn('id', file_ids).delete()
    }

    async searchFile(name) {
        return db.files.whereILike("name", `%${name}%`)
    }

    async getFilePath(file_id) {
        const file = await db.files.where({id: file_id}).first()

        if (file && file.type === "file") {
            if (fs.existsSync(file.path))
                return file.path

            await db.files.where({id: file_id}).delete()
        }

        throw new Error("Файл не найден")
    }

    async getFiles(parent_id) {
        if (!parent_id)
            parent_id = null;

        return db.files.where({parent_id})
    }
}