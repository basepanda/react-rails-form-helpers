"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekFieldTag = exports.UrlFieldTag = exports.TimeFieldTag = exports.TextFieldTag = exports.TextAreaTag = exports.TelephoneFieldTag = exports.SubmitTag = exports.SelectTag = exports.SearchFieldTag = exports.RangeFieldTag = exports.RadioTag = exports.PasswordFieldTag = exports.NumberFieldTag = exports.MonthFieldTag = exports.LabelTag = exports.HiddenFieldTag = exports.EmailFieldTag = exports.DatetimeLocalFieldTag = exports.DatetimeFieldTag = exports.DateFieldTag = exports.ColorFieldTag = exports.CheckBoxTag = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require("./utils");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CheckBoxTag = function CheckBoxTag(_ref) {
  var _ref$checkedValue = _ref.checkedValue,
      checkedValue = _ref$checkedValue === undefined ? 1 : _ref$checkedValue,
      _ref$uncheckedValue = _ref.uncheckedValue,
      uncheckedValue = _ref$uncheckedValue === undefined ? 0 : _ref$uncheckedValue,
      props = _objectWithoutProperties(_ref, ["checkedValue", "uncheckedValue"]);

  return _react2.default.createElement(
    "span",
    null,
    _react2.default.createElement(HiddenFieldTag, { name: props.name, value: uncheckedValue }),
    _react2.default.createElement("input", _extends({ type: "checkbox", value: checkedValue }, props))
  );
};

exports.CheckBoxTag = CheckBoxTag;
var ColorFieldTag = exports.ColorFieldTag = function ColorFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "color" }, props));
};

var DateFieldTag = exports.DateFieldTag = function DateFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "date" }, props));
};

var DatetimeFieldTag = exports.DatetimeFieldTag = function DatetimeFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "datetime" }, props));
};

var DatetimeLocalFieldTag = exports.DatetimeLocalFieldTag = function DatetimeLocalFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "datetime-local" }, props));
};

var EmailFieldTag = exports.EmailFieldTag = function EmailFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "email" }, props));
};

var HiddenFieldTag = exports.HiddenFieldTag = function HiddenFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "hidden", readOnly: true }, props));
};

var LabelTag = exports.LabelTag = function LabelTag(props) {
  return _react2.default.createElement("label", (0, _utils.whitelistProps)(props));
};

var MonthFieldTag = exports.MonthFieldTag = function MonthFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "month" }, props));
};

var NumberFieldTag = exports.NumberFieldTag = function NumberFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "number" }, props));
};

var PasswordFieldTag = exports.PasswordFieldTag = function PasswordFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "password" }, props));
};

var RadioTag = exports.RadioTag = function RadioTag(props) {
  return _react2.default.createElement("input", _extends({ type: "radio" }, props));
};

var RangeFieldTag = exports.RangeFieldTag = function RangeFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "range" }, props));
};

var SearchFieldTag = exports.SearchFieldTag = function SearchFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "search" }, props));
};

var SelectTag = exports.SelectTag = function SelectTag(props) {
  return _react2.default.createElement("select", (0, _utils.whitelistProps)(props));
};

var SubmitTag = exports.SubmitTag = function SubmitTag(props) {
  return _react2.default.createElement("input", _extends({ type: "submit" }, props));
};

var TelephoneFieldTag = exports.TelephoneFieldTag = function TelephoneFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "tel" }, props));
};

var TextAreaTag = exports.TextAreaTag = function TextAreaTag(props) {
  return _react2.default.createElement("textarea", (0, _utils.whitelistProps)(props));
};

var TextFieldTag = exports.TextFieldTag = function TextFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "text" }, props));
};

var TimeFieldTag = exports.TimeFieldTag = function TimeFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "time" }, props));
};

var UrlFieldTag = exports.UrlFieldTag = function UrlFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "url" }, props));
};

var WeekFieldTag = exports.WeekFieldTag = function WeekFieldTag(props) {
  return _react2.default.createElement("input", _extends({ type: "week" }, props));
};