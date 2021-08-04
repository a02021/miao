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

  //This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
  function differenceBy(a,...args){
    if(!a) return []
    var f = args[args.length -1]
    var b = args.slice(0,args.length -1)
    var newArrs = b.filter(it => it instanceof Array) //删除非数组参数
    if(newArrs.length == 0) return array //参数为空返回原数组
    newArrs = newArrs.reduce((a,b) => a.concat(b)) // 参数合并一个数组便于调用.includes
    var rel = []
    if (typeof f == 'function') {
      newArrs = newArrs.map(i => f(i))
      a.map(i => {if(!newArrs.includes(f(i))) rel.push(i)})
      return rel
    } else if (typeof f == 'string') {
      for (let i of a) {
        var t = false
        if(i instanceof Object) {
          for (let j of newArrs){
            if(j instanceof Object) {
              if(i[f] == j[f] ) t = true
            }
          }
          if(!t) rel.push(i)
        }
      }
      if(!b[0][f] || b.length>1)
      rel = rel.filter(n => n instanceof Object)
      return rel
    } else { 
      a.map(i => {if(!newArrs.includes(i)) rel.push(i)})
      return rel
    }
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
    differenceBy:differenceBy,
    forEach:forEach,
  }
} ();


//     difference 调试
function difference(array, ...arrs) {
  var newArrs = arrs.filter(it => it instanceof Array) //删除非数组参数
  if(newArrs.length == 0) return array //参数为空返回原数组
  newArrs = newArrs.reduce((a,b) => a.concat(b)) // 参数合并一个数组便于调用.includes
  var rel = []
  array.map(i => {if(!newArrs.includes(i)) rel.push(i)})
  return rel
}
console.log(difference([1,2,3,'k','l'],1,[2,'k']))

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

//要求: f为string时,匹配array内的对象的key=string的value
// i[f]没有匹配到 返回该数
// b数组内只有一个元素且 key=string 返回所有不匹配
// b的元素key!=string 返回不匹配 的key=string
// b.length >1 返回不匹配 的key=string
// f 为 函数时 
// 过滤 obj,只对数值匹配
// function differenceBy1(a,...args){
//   if(!a) return []
//   var f = args[args.length -1]
//   var b = args.slice(0,args.length -1)
//   var newArrs = b.filter(it => it instanceof Array) //删除非数组参数
//   if(newArrs.length == 0) return array //参数为空返回原数组
//   newArrs = newArrs.reduce((a,b) => a.concat(b)) // 参数合并一个数组便于调用.includes
//   var rel = []
//   if (typeof f == 'function') {
//     newArrs = newArrs.map(i => f(i))
//     a.map(i => {if(!newArrs.includes(f(i))) rel.push(i)})
//     return rel
//   } else if (typeof f == 'string') {
//     for (let i of a) {
//       var t = false
//       if(i instanceof Object) {
//         for (let j of newArrs){
//           if(j instanceof Object) {
//             if(i[f] == j[f] ) t = true
//           }
//         }
//         if(!t) rel.push(i)
//       }
//     }
//     if(!b[0][f] || b.length>1)
//     rel = rel.filter(n => n instanceof Object)
//     return rel
//   } else { 
//     a.map(i => {if(!newArrs.includes(i)) rel.push(i)})
//     return rel
//   }
// }

// console.log(differenceBy1([2.1,1.2,6],[2.3,3.4],'k','5',Math.floor))
// console.log(differenceBy1([2.1,1.2,6],[2.3,3.4],'k','5',Math.floor,[{'j':6}],[6]))
// console.log(differenceBy1([4,3,{ 'x': 1 },{'x':5,'y':6}], [{ 'x':4 }],[{'y':3}],'x') )

// console.log(differenceBy1([1,2,3,4,5,6,7,8],[1,3],[4,8],[6],it => it))