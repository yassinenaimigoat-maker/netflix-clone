const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  banner: { type: String },
  trailerUrl: { type: String },
  videoUrl: { type: String },
  year: { type: Number },
  duration: { type: String },
  maturityRating: { type: String, enum: ['G','PG','PG-13','R','NC-17','TV-MA','TV-14'], default: 'PG-13' },
  genre: [{ type: String }],
  cast: [{ type: String }],
  director: { type: String },
  type: { type: String, enum: ['movie', 'series'], default: 'movie' },
  seasons: { type: Number },
  episodes: [{
    seasonNumber: Number, episodeNumber: Number,
    title: String, description: String, duration: String, videoUrl: String
  }],
  rating: { type: Number, min: 0, max: 10, default: 0 },
  featured: { type: Boolean, default: false },
  trending: { type: Boolean, default: false }
}, { timestamps: true });

movieSchema.index({ title: 'text', description: 'text', genre: 'text' });
module.exports = mongoose.model('Movie', movieSchema);
