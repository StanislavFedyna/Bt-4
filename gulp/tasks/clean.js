var del = require('del');

module.exports = function() {
  
  return function() {
    del.sync('dist'); //delete dist before building
  };

};
