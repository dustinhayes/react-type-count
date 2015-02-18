"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var TypeCount = (function (_React$Component) {
    function TypeCount(props) {
        _classCallCheck(this, TypeCount);

        _get(Object.getPrototypeOf(TypeCount.prototype), "constructor", this).call(this, props);
        this.state = { value: "", count: 0 };
    }

    _inherits(TypeCount, _React$Component);

    _prototypeProperties(TypeCount, null, {
        update: {
            value: function update(event) {
                var value = event.target.value;
                var count = value.trim().length;

                if (count <= this.props.max) {
                    this.setState({
                        value: value,
                        count: count
                    });
                }
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var left = this.props.max - this.state.count;
                var message = React.createElement(
                    "p",
                    { className: left <= this.props.warnAt ? "TypeCount__message TypeCount__message--warning" : "TypeCount__message" },
                    left,
                    left === 1 ? " character " : " characters ",
                    "remaining"
                );

                return React.createElement(
                    "div",
                    { className: "TypeCount" },
                    React.createElement("textarea", {
                        className: "TypeCount__input",
                        value: this.state.value,
                        onChange: this.update.bind(this) }),
                    left <= this.props.showAt ? message : null
                );
            },
            writable: true,
            configurable: true
        }
    });

    return TypeCount;
})(React.Component);

module.exports = TypeCount;


TypeCount.propTypes = {
    max: React.PropTypes.number,
    showAt: React.PropTypes.number,
    warnAt: React.PropTypes.number
};
TypeCount.defaultProps = { max: 140, showAt: 100, warnAt: 10 };
