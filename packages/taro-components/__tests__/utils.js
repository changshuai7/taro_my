export function waitForChange (dom) {
  return new Promise((resolve) => {
    let timer

    const observer = new MutationObserver(() => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        observer.disconnect()
        resolve()
      }, 1000)
    })

    setTimeout(() => {
      resolve()
    }, 5000)

    observer.observe(dom, { attributes: true, childList: true, subtree: true })
  })
}

export const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export function toCamelCase (s) {
  let camel = ''
  let nextCap = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i]
      nextCap = false
    } else {
      nextCap = true
    }
  }
  return camel
}

export function capitalize (s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function printUnimplementedWarning (node) {
  return `H5 暂不支持 ${capitalize(toCamelCase(node?.nodeName.slice(5).replace('-CORE', '').toLowerCase()))} 组件！`
}
