"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashFields = exports.ArrayFields = exports.FieldsFor = exports.FormFor = exports.FormTag = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tags = require("./tags");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormTag = exports.FormTag = function (_React$Component) {
  _inherits(FormTag, _React$Component);

  function FormTag() {
    _classCallCheck(this, FormTag);

    return _possibleConstructorReturn(this, (FormTag.__proto__ || Object.getPrototypeOf(FormTag)).apply(this, arguments));
  }

  _createClass(FormTag, [{
    key: "render",
    value: function render() {
      var browserHTTPMethod = "post";
      var fakedHTTPMethod = null;

      if (this.props.method === "get") {
        browserHTTPMethod = "get";
      } else if (this.props.method !== "post") {
        fakedHTTPMethod = this.props.method;
      }

      var csrfToken = this.props.csrfToken || document.querySelector("head meta[name='csrf-token']").content;

      return _react2.default.createElement(
        "form",
        _extends({}, (0, _utils.whitelistProps)(this.props, "url", "children", "csrfToken"), {
          acceptCharset: "UTF-8",
          action: this.props.url,
          method: browserHTTPMethod
        }),
        fakedHTTPMethod && _react2.default.createElement(_tags.HiddenFieldTag, { name: "_method", value: fakedHTTPMethod }),
        csrfToken && _react2.default.createElement(_tags.HiddenFieldTag, { name: "authenticity_token", value: csrfToken }),
        _react2.default.createElement(_tags.HiddenFieldTag, { name: "utf8", value: "\u2713" }),
        this.props.children
      );
    }
  }]);

  return FormTag;
}(_react2.default.Component);

FormTag.propTypes = {
  url: _propTypes2.default.string.isRequired,
  method: _propTypes2.default.oneOf(["get", "post", "put", "patch", "delete"]),
  csrfToken: _propTypes2.default.string,
  children: _propTypes2.default.node
};
FormTag.defaultProps = {
  method: "post"
};

var FormFor = exports.FormFor = function (_React$Component2) {
  _inherits(FormFor, _React$Component2);

  function FormFor() {
    _classCallCheck(this, FormFor);

    return _possibleConstructorReturn(this, (FormFor.__proto__ || Object.getPrototypeOf(FormFor)).apply(this, arguments));
  }

  _createClass(FormFor, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        railsFormNamespaces: this.props.name ? [this.props.name] : []
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        FormTag,
        this.props,
        this.props.children
      );
    }
  }]);

  return FormFor;
}(_react2.default.Component);

FormFor.propTypes = {
  name: _propTypes2.default.string
};
FormFor.defaultProps = {
  name: null
};
FormFor.childContextTypes = {
  railsFormNamespaces: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

var FieldsFor = exports.FieldsFor = function (_React$Component3) {
  _inherits(FieldsFor, _React$Component3);

  function FieldsFor() {
    _classCallCheck(this, FieldsFor);

    return _possibleConstructorReturn(this, (FieldsFor.__proto__ || Object.getPrototypeOf(FieldsFor)).apply(this, arguments));
  }

  _createClass(FieldsFor, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        railsFormNamespaces: [].concat(_toConsumableArray(this.context.railsFormNamespaces || []), [this.props.name])
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "span",
        null,
        this.props.children
      );
    }
  }]);

  return FieldsFor;
}(_react2.default.Component);

FieldsFor.propTypes = {
  name: _propTypes2.default.string.isRequired
};
FieldsFor.contextTypes = {
  railsFormNamespaces: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
FieldsFor.childContextTypes = {
  railsFormNamespaces: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
FieldsFor.defaultProps = {
  name: ""
};
var ArrayFields = exports.ArrayFields = FieldsFor;
var HashFields = exports.HashFields = FieldsFor;