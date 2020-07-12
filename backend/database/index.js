const mongoose = require("mongoose");

const { local_ip } = require("../configs/global.config.json");

mongoose.Promise = global.Promise;

mongoose.connect(
  `mongodb://root:root@${local_ip}:27017/cotabox-challenge?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose;
