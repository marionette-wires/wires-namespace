(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['underscore'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('underscore'));
  } else {
    root.Namespace = factory(root._);
  }
})(this, function(_) {
  'use strict';

  // @include ./namespace.js
  return Namespace;
});
