module.exports = class User {
    constructor(body) {
        this.event_id = body.event_id
        this.quest_name = body.quest_name
        this.quest_description = body.quest_description
        this.start_time = new Date(body.start_time)
        this.end_time = new Date(body.end_time)
        this.voting_time = new Date(body.voting_time)
        this.quest_place = body.quest_place
        this.quest_coordinate_X = body.quest_coordinate_X
        this.quest_coordinate_Y = body.quest_coordinate_Y
    }

    getModal(){
        return {
            event_id: +this.event_id,
            quest_name: this.quest_name,
            quest_description: this.quest_description,
            start_time: this.start_time,
            end_time: this.end_time,
            voting_time: this.voting_time,
            quest_place: this.quest_place,
            quest_coordinate_X: +this.quest_coordinate_X,
            quest_coordinate_Y: +this.quest_coordinate_Y
        }
    }
}