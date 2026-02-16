const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Movie = require('./models/Movie');

const movies = [
  {
    title: "Stranger Things",
    description: "When a young boy disappears, his mother and friends must confront terrifying supernatural forces.",
    thumbnail: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    banner: "https://image.tmdb.org/t/p/original/56v2KjBlYj4sQd5VIbMa2moKRFl.jpg",
    year: 2016, duration: "50m", maturityRating: "TV-14",
    genre: ["Sci-Fi", "Horror", "Drama"],
    cast: ["Millie Bobby Brown", "Finn Wolfhard"],
    type: "series", seasons: 4, rating: 8.7, featured: true, trending: true
  },
  {
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea.",
    thumbnail: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEhnivolCPDMx.jpg",
    banner: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    year: 2010, duration: "2h 28m", maturityRating: "PG-13",
    genre: ["Action", "Sci-Fi", "Thriller"],
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    director: "Christopher Nolan", type: "movie", rating: 8.8, featured: true
  },
  {
    title: "Breaking Bad",
    description: "A chemistry teacher turns to manufacturing methamphetamine after a cancer diagnosis.",
    thumbnail: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    banner: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    year: 2008, duration: "49m", maturityRating: "TV-MA",
    genre: ["Drama", "Crime", "Thriller"],
    cast: ["Bryan Cranston", "Aaron Paul"],
    type: "series", seasons: 5, rating: 9.5, trending: true, featured: true
  },
  {
    title: "The Dark Knight",
    description: "Batman must accept one of the greatest psychological tests when the Joker wreaks havoc on Gotham.",
    thumbnail: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911kpUYLQ3EyCeT.jpg",
    banner: "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5ez.jpg",
    year: 2008, duration: "2h 32m", maturityRating: "PG-13",
    genre: ["Action", "Crime", "Drama"],
    cast: ["Christian Bale", "Heath Ledger"],
    director: "Christopher Nolan", type: "movie", rating: 9.0, featured: true
  },
  {
    title: "The Witcher",
    description: "Geralt of Rivia, a monster hunter, struggles to find his place in a world of beasts and men.",
    thumbnail: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    banner: "https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdiJq.jpg",
    year: 2019, duration: "60m", maturityRating: "TV-MA",
    genre: ["Fantasy", "Action", "Adventure"],
    cast: ["Henry Cavill", "Anya Chalotra"],
    type: "series", seasons: 3, rating: 8.2, featured: true, trending: true
  },
  {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
    thumbnail: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    banner: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg",
    year: 2014, duration: "2h 49m", maturityRating: "PG-13",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    cast: ["Matthew McConaughey", "Anne Hathaway"],
    director: "Christopher Nolan", type: "movie", rating: 8.6, trending: true
  },
  {
    title: "Squid Game",
    description: "Hundreds of cash-strapped players accept an invitation to compete in children's games for a prize.",
    thumbnail: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    banner: "https://image.tmdb.org/t/p/original/qw3J9cNeLioOLoR68WX7z79aCdK.jpg",
    year: 2021, duration: "55m", maturityRating: "TV-MA",
    genre: ["Thriller", "Drama", "Action"],
    cast: ["Lee Jung-jae", "Park Hae-soo"],
    type: "series", seasons: 2, rating: 8.0, trending: true, featured: true
  },
  {
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and redemption.",
    thumbnail: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    banner: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    year: 1994, duration: "2h 22m", maturityRating: "R",
    genre: ["Drama"],
    cast: ["Tim Robbins", "Morgan Freeman"],
    director: "Frank Darabont", type: "movie", rating: 9.3
  },
  {
    title: "Wednesday",
    description: "Wednesday Addams investigates a murder spree while making new friends at Nevermore Academy.",
    thumbnail: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    banner: "https://image.tmdb.org/t/p/original/iHSwvRVsNBCPi0Kg3Yvr5v0IbkH.jpg",
    year: 2022, duration: "45m", maturityRating: "TV-14",
    genre: ["Comedy", "Mystery", "Fantasy"],
    cast: ["Jenna Ortega", "Catherine Zeta-Jones"],
    type: "series", seasons: 1, rating: 8.1, trending: true
  },
  {
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in tales of violence.",
    thumbnail: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    banner: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    year: 1994, duration: "2h 34m", maturityRating: "R",
    genre: ["Crime", "Drama"],
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    director: "Quentin Tarantino", type: "movie", rating: 8.9
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Movie.deleteMany({});
    await Movie.insertMany(movies);
    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seed();
