if (process.env.NODE_ENV === 'production') {
  module.exports = require('./App.prod');
} else {
  if (process.env.REACT_APP_WEBSITE === 'com') {
    module.exports = require('./App.dev.com');
  } else if (process.env.REACT_APP_WEBSITE === 'cn') {
    module.exports = require('./App.dev.cn');
  }
}
