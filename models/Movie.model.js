const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    cast: [
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'Celebrity'
        }
    ]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
