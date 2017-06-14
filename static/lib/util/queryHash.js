export function queryHash(key, hash = window.location.hash) {
  const theRequest = {}
  if (hash.indexOf('?')) {
    const str = hash.substr(hash.indexOf('?') + 1)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
    }
  }
  return key ? theRequest[key] : theRequest
}
