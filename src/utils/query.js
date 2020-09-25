export function encodeQs(obj) {
  let i = -1
  const temp = []
  const keys = Object.keys(obj)

  while (++i < keys.length) {
    let prefix = keys[i] + '='
    const value = obj[keys[i]]
    if (typeof value === 'string') {
      prefix += value
    } else {
      try {
        prefix += JSON.stringify(value)
      } catch (err) {
        prefix += String(value)
      }
    }
    temp.push(prefix)
  }

  return temp.join('&')
}
