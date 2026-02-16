const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

exports.signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });
    const user = await User.create({ email, password, username });
    res.status(201).json({
      _id: user._id, username: user.username, email: user.email,
      profileImage: user.profileImage, subscription: user.subscription,
      token: generateToken(user._id)
    });
  } catch (error) { res.status(500).json({ message: error.message }); }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      res.json({
        _id: user._id, username: user.username, email: user.email,
        profileImage: user.profileImage, subscription: user.subscription,
        token: generateToken(user._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) { res.status(500).json({ message: error.message }); }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) { res.status(500).json({ message: error.message }); }
};
