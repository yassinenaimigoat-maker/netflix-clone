const API_URL = import.meta.env.VITE_API_URL || window.location.origin + '/api';

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.token;
};

export const loginUser = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

export const signupUser = async (email, password, username) => {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, username }),
  });
  if (!res.ok) throw new Error('Signup failed');
  return res.json();
};

export const getAllMovies = async () => {
  const res = await fetch(`${API_URL}/movies`);
  return res.json();
};

export const getFeaturedMovies = async () => {
  const res = await fetch(`${API_URL}/movies/featured`);
  return res.json();
};

export const getTrendingMovies = async () => {
  const res = await fetch(`${API_URL}/movies/trending`);
  return res.json();
};

export const getMovieById = async (id) => {
  const res = await fetch(`${API_URL}/movies/${id}`);
  return res.json();
};

export const searchMovies = async (query) => {
  const res = await fetch(`${API_URL}/movies/search?q=${query}`);
  return res.json();
};

export const getMyList = async () => {
  const res = await fetch(`${API_URL}/watchlist`, {
    headers: { 'Authorization': `Bearer ${getToken()}` },
  });
  return res.json();
};

export const addToMyList = async (movieId) => {
  const res = await fetch(`${API_URL}/watchlist/${movieId}`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${getToken()}` },
  });
  return res.json();
};

export const removeFromMyList = async (movieId) => {
  const res = await fetch(`${API_URL}/watchlist/${movieId}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${getToken()}` },
  });
  return res.json();
};

export const getGenres = async () => {
  const res = await fetch(`${API_URL}/movies/genres`);
  return res.json();
};

export const getMoviesByGenre = async (genre) => {
  const res = await fetch(`${API_URL}/movies/genre/${genre}`);
  return res.json();
};
