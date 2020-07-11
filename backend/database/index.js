const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://root:root@localhost:27017/cotabox-challenge?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  {
    useNewUrlParser: true,
    // user: "root",
    // pass: "root",
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose;
