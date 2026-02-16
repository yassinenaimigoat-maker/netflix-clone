const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
  username: { type: String, required: true, trim: true },
  profileImage: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' },
  subscription: { type: String, enum: ['basic', 'standard', 'premium'], default: 'basic' },
  myList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  watchHistory: [{
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    watchedAt: { type: Date, default: Date.now },
    progress: { type: Number, default: 0 }
  }]
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
