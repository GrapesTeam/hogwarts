if (process.env.REACT_APP_WEBSITE === 'com') {
  module.exports = require('./App.com');
} else if (process.env.REACT_APP_WEBSITE === 'cn') {
  module.exports = require('./App.cn');
}
