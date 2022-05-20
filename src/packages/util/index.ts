// // 防抖
export function debounce(fn: any, delay = 500) {
  let timer: any
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fn.apply(this, args)
    }, delay)
  }
}

// 根据key从obj删除指定key
export function omit(obj: any, delKey: string[]) {
  const newObj = JSON.parse(JSON.stringify(obj))
  Object.keys(newObj).forEach(key => {
    // console.log(key)
    if (delKey.includes(key)) {
      delete newObj[key]
    }
  })
  return newObj
}
