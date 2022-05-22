// // 防抖
export function debounce(fn: any, delay = 100, first = false) {
  let timer: any
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    if (first) {// 先响应一次
      if (!timer) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fn.apply(this, args)
      }
    }
    timer = setTimeout(() => {
      if (first) {
        timer = null
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fn.apply(this, args)
      }
    }, delay)
  }
}

/**
 * 从obj删除指定key
 * @param obj {a:'a',b:'b'}||['a','b']
 * @param delKey ['a']
 * @return 移除后的新数据
 */
export function omit(obj: any, delKey: string[]) {
  if (!obj) {
    return obj
  }
  if (Array.isArray(obj)) {
    return obj.filter(item => {
      // console.log(item)
      return !delKey.includes(item)
    })
  }
  let temp: any = {}
  for (const key in obj) {
    if (!delKey.includes(key)) {
      temp[key] = obj[key]
    }
  }
  return temp
}

