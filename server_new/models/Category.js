module.exports = class User {
    constructor(body) {
        this.category_name = body.category_name
        this.category_rating = body.category_rating
    }

    getModal(){
        return {
            category_name: this.category_name,
            category_rating: this.category_rating
        }
    }
}