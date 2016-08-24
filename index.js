const primateMap = {
  string: String,
  number: Number,
  boolean: Boolean
}

export const emptyFunc = function () {}

/*
props: {
  name: 'peter',
  age: 18,
  isMarried: true,
  doNothing: PropTypes.emptyFunc
}
=>
{
  name: { type: String, default: 'peter' },
  age: {type: Number, default: 18},
  isMarried: {type: Boolean, default: true},
  doNothing: {type: Function, default: emptyFunc}
}
 */
export function easyProps (props = {}) {
  Object.keys(props).forEach(key => {
    const val = props[key]
    const ctrType = primateMap[typeof val]
    if (ctrType) {
      props[key] = {
        type: ctrType,
        default: val
      }
    } else if (val === emptyFunc) {
      props[key] = {
        type: Function,
        default: emptyFunc
      }
    }
  })
  return props
}

/*
propValueIn(['a', 'b']) // optinal one of 'a' / 'b'
 */
export function oneOf (vals, defaultVal, required = false) {
  return {
    required: required,
    default: defaultVal,
    validator: (v) => vals.indexOf(v) >= 0
  }
}

export function requiredOneOf (vals, defaultVal) {
  return oneOf(vals, defaultVal, true)
}

const PropTypes = {
  easyProps,

  //format: required or not | validator | default value
  emptyFunc, // optional | Function | empty function
  oneOf,  // optional | match one in given array | optional specify
  requiredOneOf // required | match one in given array | optinal specify
}

export default PropTypes
