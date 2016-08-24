# VuePropTypes

Props helpers in vue.js like PropTypes in react

## Usage

import PropTypes from 'vue-prop-types'

```
props: PropTypes.easyProps({
    onClick: PropTypes.emptyFunc,
    name: PropTypes.requiredOneOf(['peter', 'lily']),
    gender: PropTypes.oneOf(['male', 'female'], 'male'),
    age: PropTypes.oneOf(['1', '2', '3']),
})

will convert to sth. like

props: {
  onClick: {
    type: Function,
    default: function () {}
  },
  name: {
    required: false,
    default: undefined,
    validator: (v) => ['peter', 'lily'].indexOf(v) >= 0
  },
  gender: {
    required: true,
    default: 'male',
    validator: (v) => ['male', 'female'].indexOf(v) >= 0
  },
  age: {
    required: false,
    default: undefined,
    validator: (v) => ['1', '2', '3'].indexOf(v) >= 0
  },
}
```

## TODO

- [ ] test
- [ ] more types
