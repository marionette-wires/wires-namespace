(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['lodash'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('lodash'));
  } else {
    root.Namespace = factory(root._);
  }
})(this, function(_) {
  'use strict';

  // @include ./namespace.js
  return Namespace;
});
