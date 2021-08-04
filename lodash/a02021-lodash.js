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
    //args为数组 长度=1 取出[0]的值
    if(args.length == 1) return difference(a,args[0])
    var f = args[args.length -1]
    var b = args.slice(0,args.length -1)
    var newArrs = b.filter(it => it instanceof Array) //删除非数组参数
    if(newArrs.length == 0) return a //参数为空返回原数组
    newArrs = newArrs.reduce((a,b) => a.concat(b)) // 参数合并一个数组便于调用.includes
    var rel = []
    if (Object.prototype.toString.call(f) == '[object Object]') {
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
      return difference(a,...args)
    }
  }

  //This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
  function differenceWith(array, ...args) {
    var f = args[args.length -1]
    var b = args.slice(0,args.length -1)
  
    var newArrs = b.filter(it => it instanceof Array) //删除非数组参数
    if(newArrs.length == 0) return array //参数为空返回原数组
    newArrs = newArrs.reduce((a,b) => a.concat(b)) // 参数合并一个数组便于调用.includes
    var rel = []
  
    if (typeof f == 'function') {
        for (let i of array) {
        var t = false
        if(i instanceof Object) {
          for (let j of newArrs){
            if(j instanceof Object) {
              if(f(i,j) ) t = true
            }
          }
          if(!t) rel.push(i)
        }
      }
    }
    return rel
  }
  
  //Creates a slice of array with n elements dropped from the beginning.
  function drop(array, n = 1) {
    if (n == 0) return array
    if (n >= array.length) return []
    let result = []
    for (let i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  }
//Creates a slice of array with n elements dropped from the end.
  function dropRight(array, n = 1) {
    if (n == 0) return array
    if (n >= array.length) return []
    let result = []
    for (let i = 0; i < array.length - n; i++) {
      result.push(array[i])
    }
    return result
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
 //Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
//条件 : 函数/对象/数组/字符串
function dropRightWhile(array,f) {
  let result = []
   if (typeof f == 'function') {
     for (let i of array) {
       if (!f(i)) result.push(i)
     }
   }
   if (f instanceof Object) {
     if(f instanceof Array) {
       for (let i of array) {
         if (i[f[0]] !== f[1]) result.push(i)
       }
     } else {
       for (let i of array) {
         let k = Object.keys(f)
// 用Object.keys()获取下标
         if (i[k[0]] !== f[k[0]] || i[k[1]] !== f[k[1]]) result.push(i)
       }
     }
   }
   if (typeof f == 'string') {
     for (let i of array) {
       if (i.hasOwnProperty(f)) result.push(i)
     }
   }
   return result
 }

 function dropWhile(array,f) {
  let result = []
   if (typeof f == 'function') {
     for (let i of array) {
       if (!f(i)) result.push(i)
     }
   }
   if (f instanceof Object) {
     if(f instanceof Array) {
       for (let i of array) {
         if (i[f[0]] !== f[1]) result.push(i)
       }
     } else {
       for (let i of array) {
         let k = Object.keys(f)
// 用Object.keys()获取下标
         if (i[k[0]] !== f[k[0]] || i[k[1]] !== f[k[1]]) result.push(i)
       }
     }
   }
   if (typeof f == 'string') {
     for (let i of array) {
       if (i.hasOwnProperty(f)) result.push(i)
     }
   }
   return result
 }

  //Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
  function get(object, path, defaultValue = undefined) {
    if (defaultValue !== undefined) return defaultValue
    let arr = []
    if(typeof path == 'string') {
      var cas = ''
      for (let i of path) {
        if(i !== '[' && i !== ']' && i !== '.') {
          cas += i
        } else {
          if (cas) {
          arr.push(cas)
          cas = ''
          }
        }
      }
      if (cas) arr.push(cas)
    }
    if(path instanceof Array) arr = path
    let result = object
    arr.forEach(it => result = result? result[it]:undefined)
    if (result == undefined) return defaultValue
    return result
  }

  //Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.
  function delay(func, wait, args) {
    setTimeout(() => {
      func(args)
    }, wait);
  }
  
  return {
    chunk:chunk,
    compact:compact,
    difference:difference,
    differenceBy:differenceBy,
    forEach:forEach,
    differenceWith:differenceWith,
    drop:drop,
    dropRight:dropRight,
    dropRightWhile:dropRightWhile,
    dropWhile:dropWhile,
    get:get,
    delay:delay,
  }
} ();

