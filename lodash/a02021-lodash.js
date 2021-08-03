var a02021 = function() {
  //Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
  function chunk(array,size = 1) {
    var rel = []
    var l = array.length
    var s = l / size
    if(!l || s<1) return []
    if( l % size != 0){
      rel.push(array.slice(0,-1))
      rel.push(array.slice(-1))
    } else {
      var start = 0
      while (start < l){
        rel.push(array.slice(start,start+s))
        start += s
      }
    }
    return rel
  }

  //Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
  function compact(array) {
    if(!array) return []
    let rel = []
    for(let i in array) {
        if(array[i]) rel.push(array[i])
      }
      return rel
  }

  //Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
  function difference(array, ...arrs) {
    var newArrs = arrs.filter(it => it instanceof Array) //删除非数组参数
    if(newArrs.length == 0) return array //参数为空返回原数组
    newArrs = newArrs.reduce((a,b) => a.concat(b)) // 参数合并一个数组便于调用.includes
    var rel = []
    array.map(i => {if(!newArrs.includes(i)) rel.push(i)})
    return rel
  }

  function differenceby(array){
    return array
  }

  function forEach(obj,f){
    //限制循环条件参数为 数组/对象/字符串 
     if (obj instanceof Object || typeof(obj) =='string'){
      for(let i in obj){
        f(obj[i], i )
      }
    }
    //函数返回值为原参数
    return obj
  }

  return {
    chunk:chunk,
    compact:compact,
    difference:difference,
    differenceby:differenceby,
    forEach:forEach,
  }
} ();



//     difference 调试
// function difference(array, ...arrs) {
//   var newArrs = arrs.filter(it => it instanceof Array) //删除非数组参数
//   if(newArrs.length == 0) return array //参数为空返回原数组
//   newArrs = newArrs.reduce((a,b) => a.concat(b)) // 参数合并一个数组便于调用.includes
//   var rel = []
//   array.map(i => {if(!newArrs.includes(i)) rel.push(i)})
//   return rel
// }
// console.log(difference([1,2,3,'k','l'],1,[2,'k']))

// forEach调试
// function forEach1(obj,f){
//   //限制循环条件参数为 数组/对象/字符串 
//    if (obj instanceof Object || typeof(obj) =='string'){
//     for(let i in obj){
//       f(obj[i], i )
//     }
//   }
//   //函数返回值为原参数
//   return obj
// }
// forEach1({'a':1,'b':2}, (value,key) =>console.log(';',value))
// forEach1(123, (value,key) =>console.log(';',value))
// forEach1('gkj', (value,key) =>console.log(';',value))