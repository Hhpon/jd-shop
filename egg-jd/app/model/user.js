module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    userName: { type: String },
    telNum: { type: String },
    password: { type: String },
    cart: [
      {
        goodName: { type: String },
        count: { type: Number },
        kouwei: { type: String },
        price: { type: String },
        pic: { type: String },
        checkStatus: { type: Boolean }
      }
    ]
  });

  return mongoose.model('User', UserSchema);
}