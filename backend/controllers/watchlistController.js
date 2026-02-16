const User = require('../models/User');

exports.getMyList = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('myList');
    res.json(user.myList);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

exports.addToList = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.myList.includes(req.params.movieId))
      return res.status(400).json({ message: 'Already in list' });
    user.myList.push(req.params.movieId);
    await user.save();
    res.json({ message: 'Added to My List' });
  } catch (error) { res.status(500).json({ message: error.message }); }
};

exports.removeFromList = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.myList = user.myList.filter(id => id.toString() !== req.params.movieId);
    await user.save();
    res.json({ message: 'Removed from My List' });
  } catch (error) { res.status(500).json({ message: error.message }); }
};
