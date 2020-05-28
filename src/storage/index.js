/**
 *  Storage封装
 */
const STORAGE_KEY = 'mall'

export default {
  // 存储
  setItem (key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      // 设置 sessionStorage  JSON.stringify 将对象转换成 json字符串
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取某一个模块下面的属性
  getItem (key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  getStorage () {
    // json.parse  将json字符串 转换成 对象
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY || {}))
  },
  clear (key, module_name) {
    let val = this.getStorage()
    if (module_name) {
      if (!val[module_name]) return;
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
