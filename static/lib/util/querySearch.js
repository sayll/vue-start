export function querySearch(key, search = window.location.search) {
  const theRequest = {}
  if (search.indexOf('?') !== -1) {
    const str = search.substr(1)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
    }
  }
  return key ? theRequest[key] : theRequest
}
