export const getCookie = name => {
    if (!name) {
      return null
    }
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            '(?:(?:^|.*;)\\s*' +
            encodeURIComponent(name).replace(/[-.+*]/g, '\\$&') +
            '\\s*\\=\\s*([^;]*).*$)|^.*$',
          ),
          '$1',
        ),
      ) || null
    )
  }
  
  export const setCookie = (name, value, timeEnd, path, domain, isSecure, sameSite) => {
    if (!name || /^(?:expires|max-age|path|domain|secure)$/i.test(name)) {
      return false
    }
    let sExpires = ''
    if (timeEnd) {
      // eslint-disable-next-line default-case
      switch (timeEnd.constructor) {
        case Number:
          sExpires =
            timeEnd === Infinity
              ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT'
              : '; max-age=' + timeEnd
          break
        case String:
          sExpires = '; expires=' + timeEnd
          break
        case Date:
          sExpires = '; expires=' + timeEnd.toUTCString()
          break
      }
    }
    document.cookie =
      encodeURIComponent(name) +
      '=' +
      encodeURIComponent(value) +
      sExpires +
      (domain ? '; domain=' + domain : '') +
      (path ? '; path=' + path : '') +
      (isSecure ? '; secure' : '') +
      (sameSite ? '; sameSite=' + sameSite : '')
    return true
  }
  
  export const deleteCookie = (name, path, domain) => {
    if (!hasCookie(name)) {
      return false
    }
    path = path || '/'
    // eslint-disable-next-line no-restricted-globals
    domain = domain || location.hostname
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${domain}; path=${path}`
    return true
  }
  
  export const hasCookie = name => {
    if (!name) {
      return false
    }
    return new RegExp(
      '(?:^|;\\s*)' +
      encodeURIComponent(name).replace(/[-.+*]/g, '\\$&') +
      '\\s*\\=',
    ).test(document.cookie)
  }
  
  export const keysCookie = () => {
    const aKeys = document.cookie
      .replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:|$)/g, '')
      .split(/\s*(?:=[^;]*)?;\s*/)
    for (let nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx])
    }
    return aKeys
  }