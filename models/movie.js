const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    movie_genres: {
        type: [Number],
        required: true
    },
    movie_id: {
        type: Number,
        required: true,
    },
    movie_title: {
        type: String,
        required: true
    },
    poster_url: {
        type: [String],
        required: true
    },
    movie_url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
    },
    num_review: {
        type: String,
        required: true,
    },
    director: {
        type: [String],
        required: true,
    },
    writer: {
        type: [String],
        required: true,
    },
    cast: {
        type: [String],
        required: true,
    },
    age_rating: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    movie_length: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    }
})

module.exports = mongoose.model('Movie', movieSchema)