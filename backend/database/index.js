const mongoose = require("mongoose");

mongoose.connect("mongodb://root:root@localhost/cotabox-challenge", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
