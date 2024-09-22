module.exports = class File {
    constructor(other) {
        this.name = other.name.toString()
        this.size = other.size
        this.path = other.path.toString()
        this.date = new Date(other.date)
        this.user_id = other.user_id
        this.event_id = other.event_id
        this.quest_id = other.quest_id
        this.user_quest_answer_id = other.user_quest_answer_id
    }
}