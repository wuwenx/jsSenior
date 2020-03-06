'use strict';

require('babel-polyfill');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

[1, 2, 3].map(function (n) {
  return n + 1;
});
Object.assign({ o: 123 }, { r: 345 });

var parent = function parent(a) {
  _classCallCheck(this, parent);

  this.a = a;
};

;

var child = function (_parent) {
  _inherits(child, _parent);

  function child() {
    _classCallCheck(this, child);

    return _possibleConstructorReturn(this, (child.__proto__ || Object.getPrototypeOf(child)).call(this));
  }

  return child;
}(parent);

;
var childL = new child();
