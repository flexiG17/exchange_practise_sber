module.exports = class User {
    constructor(body, user_id) {
        this.user_id = user_id
        this.name = body.name
        this.description = body.description
        this.date = new Date(body.date)
        this.dateToFilter = new Date(body.dateToFilter)
        this.place = body.place
        this.duration = body.duration
        this.statistic = body.statistic
        this.rating = body.rating
        this.price = body.price
        this.status = body.status
        this.coordinate_X = body.coordinate_X
        this.coordinate_Y = body.coordinate_Y
    }

    getModal(){
        return {
            user_id: +this.user_id,
            name: this.name,
            description: this.description,
            date: this.date,
            dateToFilter: this.dateToFilter,
            place: this.place,
            duration: this.duration,
            statistic: this.statistic,
            rating: this.rating,
            price: this.price,
            status: this.status,
            coordinate_X: this.coordinate_X,
            coordinate_Y: this.coordinate_Y,
        }
    }
}