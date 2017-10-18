var React = require('react')
var ReactNative = require('react-native')
var Icon = require('react-native-vector-icons/MaterialIcons')
var styles = require('./style')

var { PropTypes } = React
var {
  View,
  Text,
  TouchableOpacity
} = ReactNative

var Spinner = React.createClass({
  propTypes: {
    min: PropTypes.number,
    max: PropTypes.number,
    default: PropTypes.number,
    value: PropTypes.number,
    color: PropTypes.string,
    numColor: PropTypes.string,
    numBgColor: PropTypes.string,
    showBorder: PropTypes.bool,
    fontSize: PropTypes.number,
    btnFontSize: PropTypes.number,
    buttonTextColor: PropTypes.string,
    disabled: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number
  },

  getDefaultProps () {
    return {
      min: 0,
      max: 99,
      default: 0,
      color: '#33c9d6',
      numColor: '#333',
      numBgColor: 'white',
      showBorder: true,
      fontSize: 14,
      btnFontSize: 14,
      buttonTextColor: 'white',
      disabled: false,
      width: 90,
      height: 30,
      numLabel: ' '
    }
  },

  getInitialState () {
    return {
      min: this.props.min,
      max: this.props.max,
      num: typeof this.props.value !== 'undefined' ? this.props.value : this.props.default,
      formattedNum: typeof this.props.value !== 'undefined' ? this._formattedNum(this.props.value, this.props.format) : this._formattedNum(this.props.default, this.props.format)
    }
  },

  componentWillReceiveProps (nextProps) {
    if (nextProps.min) {
      this.setState({
        min: nextProps.min
      })
    }
    if (nextProps.max) {
      this.setState({
        max: nextProps.max
      })
    }
    if (nextProps.value) {
      this.setState({
        num: nextProps.value,
        formattedNum: this._formattedNum(nextProps.value, this.props.format)
      })
    }
  },

  _onNumChange (num) {
    if (this.props.onNumChange) this.props.onNumChange(num)
  },

  _increase () {
    if (this.props.disabled) return

    if (this.state.max > this.state.num) {
      var num = this.state.num + 1
      if (typeof this.props.value === 'undefined') {
        this.setState({
          num: num,
          formattedNum: this._formattedNum(num, this.props.format)
        })
      }

      this._onNumChange(num)
    }
  },

  _decrease () {
    if (this.props.disabled) return

    if (this.state.min < this.state.num) {
      var num = this.state.num - 1
      if (typeof this.props.value === 'undefined') {
        this.setState({
          num: num,
          formattedNum: this._formattedNum(num, this.props.format)
        })
      }

      this._onNumChange(num)
    }
  },

  _formattedNum (num, format) {
    if (typeof format === 'string') {
      switch (format) {
        case 'feet':
          return Math.floor(num / 12) + "' " + (num % 12) + '" '
        default:
          return num
      }
    }

    if (Array.isArray(format)) {
        return format[num]
    }

    return num
  },

  render () {
    return (
      <View style={[styles.container,
        { borderColor: this.props.showBorder ? this.props.color : 'transparent' },
        { width: this.props.width } ]}>
        <TouchableOpacity
            style={[styles.btn,
				{ backgroundColor: this.props.color },
				{ borderColor: this.props.showBorder ? this.props.color : 'transparent' },
				{ height: this.props.height }, { alignSelf: 'center' }]}
            onPress={this._decrease}>
          <Icon
              style={[styles.btnText]}
              color={this.props.buttonTextColor}
              name={'indeterminate-check-box'}
              size={this.props.btnFontSize}/>
        </TouchableOpacity>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          { this.props.numLabel && <Text style={this.props.numLabelStyle}>{this.props.numLabel}</Text>}
          <Text style={this.props.numTextStyle}>{this.state.formattedNum}</Text>
          { this.props.numFooterLabel && <Text style={this.props.numLabelStyle}>{this.props.numFooterLabel}</Text> }
        </View>
        <TouchableOpacity
            style={[styles.btn,
				{ backgroundColor: this.props.color },
				{ borderColor: this.props.showBorder ? this.props.color : 'transparent' },
				{ height: this.props.height }, { alignSelf: 'center' }]}
            onPress={this._increase}>
          <Icon
              style={[styles.btnText]}
              color={this.props.buttonTextColor}
              name={'add-box'}
              size={this.props.btnFontSize}/>
        </TouchableOpacity>
      </View>
    )
  }
})

module.exports = Spinner
