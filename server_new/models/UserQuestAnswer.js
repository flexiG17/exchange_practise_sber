module.exports = class User {
    constructor(body, userId, file) {
        this.user_id = userId
        this.quest_id = body.quest_id
        this.userPhoto = `/quests/${body.quest_id}/${userId}/${file.filename}`
        this.time = new Date(Date.now())
        this.comment = body.comment
        this.rating = body.rating
        this.user_coordinate_X = body.user_coordinate_X
        this.user_coordinate_Y = body.user_coordinate_Y
    }

    getModal(){
        return {
            user_id: +this.user_id,
            quest_id: +this.quest_id,
            userPhoto: this.userPhoto,
            time: this.time,
            comment: this.comment,
            rating: this.rating,
            user_coordinate_X: this.user_coordinate_X,
            user_coordinate_Y: this.user_coordinate_Y
        }
    }
}