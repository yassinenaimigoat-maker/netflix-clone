const Movie = require('../models/Movie');

exports.getAllMovies = async (req, res) => {
  try {
    const { genre, type, page = 1, limit = 20 } = req.query;
    const query = {};
    if (genre) query.genre = genre;
    if (type) query.type = type;
    const movies = await Movie.find(query).limit(limit * 1).skip((page - 1) * limit).sort({ createdAt: -1 });
    const total = await Movie.countDocuments(query);
    res.json({ movies, totalPages: Math.ceil(total / limit), currentPage: page });
  } catch (error) { res.status(500).json({ message: error.message }); }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

exports.getFeatured = async (req, res) => {
  try { res.json(await Movie.find({ featured: true }).limit(10)); }
  catch (error) { res.status(500).json({ message: error.message }); }
};

exports.getTrending = async (req, res) => {
  try { res.json(await Movie.find({ trending: true }).limit(20)); }
  catch (error) { res.status(500).json({ message: error.message }); }
};

exports.getByGenre = async (req, res) => {
  try { res.json(await Movie.find({ genre: req.params.genre }).limit(20)); }
  catch (error) { res.status(500).json({ message: error.message }); }
};

exports.searchMovies = async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await Movie.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { genre: { $regex: q, $options: 'i' } }
      ]
    }).limit(20);
    res.json(movies);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

exports.getGenres = async (req, res) => {
  try { res.json(await Movie.distinct('genre')); }
  catch (error) { res.status(500).json({ message: error.message }); }
};

exports.createMovie = async (req, res) => {
  try { res.status(201).json(await Movie.create(req.body)); }
  catch (error) { res.status(500).json({ message: error.message }); }
};
