function cloneDeep(obj, map = new Map()) {
  //如果obj已经被复制过 直接返回它的复制品
  if (map.has(obj)) return map.get(obj)
  // 否则，建立它的复制品
  let result = {}
  //设置设置映射，以防重复复制
  map.set(obj,result)
  for (let key in obj) {
    let val = obj[key]
    if (val && typeof val === 'object') {
      result[key] = cloneDeep(val, map)
    } else {
      result[key] = val
    }
  }
  return result
}

let ojj = {a:{b:'1'},c:[1,2]}
console.log(cloneDeep(ojj))
// function cloneDeep(obj, map = new Map()) {
//   if (map.has(obj)) {//如果obj已经被复制过
//       return map.get(obj)//直接返回它的复制品
//   }

//   var result = {}// 否则，建立它的复制品
//   map.set(obj, result)//设置设置映射，以防重复复制
//   for (var key in obj) {
//       var val = obj[key]
//       if (val && typeof val === 'object') {
//           result[key] = cloneDeep(val, map)
//       } else {
//           result[key] = val
//       }
//   }
//   return result
// }
