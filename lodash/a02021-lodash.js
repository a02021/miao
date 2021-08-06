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
    if (typeof f  == 'function') {
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

  //Creates an array of the own enumerable property names of object.
  function keys(object) {
    let keyArr = []
    for (let i in object) {
      keyArr.push(i)
    }
    return keyArr
  }

  //Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
  function map(arg, f){
    let result = []
    if (typeof f == 'function') {
      for (let i of arg) {
        result.push(f(i))
      }
    } else if (typeof f == 'string') {
      let arr = []
      let cas = []
      for(let i of f){
        if(i !== '[' && i !== ']' && i !== '.') {
          cas += i
        } else if (cas) {
          arr.push(cas)
          cas = ''
        }
      }
      if (cas) arr.push(cas)
      arg.map(k => {arr.forEach(it => k = k? k[it]:undefined)
        result.push(k)
      })
    }
    return result
  }

  //Fills elements of array with value from start up to, but not including, end.
  function fill(array, val, start=0, end = array.length) {
    for ( let i = start; i < end; i++) {
      array[i] = val
    }
    return array
  }

  // Creates an array of the own enumerable string keyed property values of object.
  function values(obj) {
    let result = []
    //获取可枚举key 不包括原型链上的
    for (let k of Object.keys(obj)) {
      result.push(obj[k])
    }
    return result
  }
  // Creates an array of the own and inherited enumerable string keyed property values of object.
  function valuesIn(obj) {
    let result = []
    //返回所有可遍历枚举的属性,包括原型上
    for (let k in obj) {
      result.push(obj[k])
    }
    return result
  }
  // Flattens array a single level deep.
  // 取出每个数组元素内的元素(第一层)
  function flatten(array) {
    if(!array) return []
    let result = []
    for (let i of array) {
      if(typeof i == 'object') {
          result.push(...i)
      } else {
        result.push(i)
      }
    }
    return result
  }
  // Recursively flattens array.
  // 取出每个数组元素内的元素(递归到每一层)
  function flattenDeep(array) {
    if(!array) return []
    let result = []
    for (let i of array) {
      if(typeof i == 'object') {
          result.push(...flattenDeep(i))
      } else {
        result.push(i)
      }
    }
    return result
  }
  //Recursively flatten array up to depth times.
  //取出每个数组元素内的元素(自定义递归层数)
  function flattenDepth(array,depth = 1) {
    if(!array) return []
    let result = []
    for (let i of array) {
      console.log('---',i,array,depth)
      if(typeof i == 'object' && depth>0) {
          depth--
          result.push(...flattenDepth(i,depth))
          console.log(i,depth)
      } else {
        result.push(i)
      }
    }
    return result
  }

  // Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object.
  // 只有0-1个参数 返回true
  // obj不是数组/对象 返回 false
  // f第一个key的value为function 返回f(obj[key1)的值
  function conformsTo(obj, f) {
    if(!obj || !f) return true
    if (typeof obj == 'object') {
      let i = Object.keys(f)[0]
      if(obj.hasOwnProperty(i)){
          return f[i](obj[i])
      } else {
        return false
      }
    } else {
      return false
    }
  }

  //Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
  // 对collection每个元素 比较 predicate 每个key和value
  // predicate 为数组,key = [0] value = [1]
  // predicate 为函数 直接传递每个元素
  // predicate 空 true
  //已经改成 封装迭代器 的写法:
  function every(collection,predicate) {
    if(!predicate)  return true
    let k = Object.keys(collection)
    let p = f(predicate)
    let result = []
    for(let i of k) {
      if (!p(collection[i])) return false
    }
    return true
  
    function f(p){
      if(typeof p == 'function') return p
      if(typeof p == 'string') return n => n[p]
      if(Object.prototype.toString.call(p) == '[object Array]') {
        return n => n[p[0]] == p[1]
      }
      if(Object.prototype.toString.call(p) == '[object Object]') {
        return n => {
          let kp = Object.keys(p)
          let bol = true
          for(let key of kp) {
            if(n[key] !== p[key]) bol = false
          }
          if(bol) return true
        }
      }
    }
  }
  //Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
  // 和every 区分 只需满足一次
  //已经改成 封装迭代器 的写法:
  function some(collection,predicate) {
    if(!predicate)  return collection
    let k = Object.keys(collection)
    let p = f(predicate)
    let result = []
      for(let i of k) {
        if (p(collection[i])) return true
      }
      return false
  
    function f(p){
      if(typeof p == 'function') return p
      if(typeof p == 'string') return n => n[p]
      if(Object.prototype.toString.call(p) == '[object Array]') {
        return n => n[p[0]] == p[1]
      }
      if(Object.prototype.toString.call(p) == '[object Object]') {
        return n => {
          let kp = Object.keys(p)
          let bol = true
          for(let key of kp) {
            if(n[key] !== p[key]) bol = false
          }
          if(bol) return true
        }
      }
    }
  }

  //Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
  // 筛选符合条件的结果输出对象 方法类似every/some
  // 已经改成 封装迭代器 的写法:
  //every, some, filter (已经改成 封装迭代器 的写法 ,仅返回值不同)
  function filter(collection,predicate) {
    if(!predicate)  return collection
    let k = Object.keys(collection)
    let p = f(predicate)
    let result = []
      for(let i of k) {
        if (p(collection[i])) result.push(collection[i])
      }
      return result
  
    function f(p){
      if(typeof p == 'function') return p
      if(typeof p == 'string') return n => n[p]
      if(Object.prototype.toString.call(p) == '[object Array]') {
        return n => n[p[0]] == p[1]
      }
      if(Object.prototype.toString.call(p) == '[object Object]') {
        return n => {
          let kp = Object.keys(p)
          let bol = true
          for(let key of kp) {
            if(n[key] !== p[key]) bol = false
          }
          if(bol) return true
        }
      }
    }
  }
  
  //This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
  //和some 仅输出不同 true输出索引 flase输出-1 
  function findIndex(collection,predicate) {
    if(!predicate)  return collection
    let k = Object.keys(collection)
    let p = f(predicate)
      for(let i of k) {
        if (p(collection[i])) return i
      }
      return -1
  
    function f(p){
      if(typeof p == 'function') return p
      if(typeof p == 'string') return n => n[p]
      if(Object.prototype.toString.call(p) == '[object Array]') {
        return n => n[p[0]] == p[1]
      }
      if(Object.prototype.toString.call(p) == '[object Object]') {
        return n => {
          let kp = Object.keys(p)
          let bol = true
          for(let key of kp) {
            if(n[key] !== p[key]) bol = false
          }
          if(bol) return true
        }
      }
    }
  }
  //This method is like _.findIndex except that it iterates over elements of collection from right to left.
  //和findIndex一样 仅将索引反转
  function findLastIndex(collection,predicate) {
    if(!predicate)  return collection
    let k = Object.keys(collection)
    k = k.reverse()
    let p = f(predicate)
      for(let i of k) {
        if (p(collection[i])) return i
      }
      return -1

    function f(p){
      if(typeof p == 'function') return p
      if(typeof p == 'string') return n => n[p]
      if(Object.prototype.toString.call(p) == '[object Array]') {
        return n => n[p[0]] == p[1]
      }
      if(Object.prototype.toString.call(p) == '[object Object]') {
        return n => {
          let kp = Object.keys(p)
          let bol = true
          for(let key of kp) {
            if(n[key] !== p[key]) bol = false
          }
          if(bol) return true
        }
      }
    }
  }


  //Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
  // (accumulator, value, index|key, collection).
  // 迭代对象每个值和前一次的结果
  function reduce(obj, f, init) {
    let k = Object.keys(obj)
    let result = init
    let start = 0
    if (!init) {
        result = obj[k[0]]
        start = 1
    }
    for (let i = start; i < k.length; i++) {
        result = f(result, obj[k[i]], k[i])
    }
    return result
  }

  //Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
  // 对多个数组按下标重新分组 
  function zip(...arrays) {
    let result = []
    let maxLength = mx(arrays)
    for(let it of arrays) {
      for (let i = 0;i < maxLength; i++) {
        if(! result[i]) {
          result[i] = [it[i]]
        } else {
          result[i].push(it[i])
        }
      }
    }
    return result
    function mx(arr) {
      let r = 0
      for(let it of arr) {
        if (it.length > r) r = it.length
      }
      return r
    }
  }
  
  //This method is like _.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.
  //把数组内的数组传递给zip
  function unzip(arr) {
    return zip(...arr)
  }
  
  //Performs a deep comparison between two values to determine if they are equivalent.
  //深层比较2个参数的值是否相同
  function isEqual(a, b) {
    if (a === b) return true
    if (typeof a == 'number' || typeof a == 'string') return false
    if (Object.prototype.toString.call(a) == Object.prototype.toString.call(b)) {
        let ka = Object.keys(a)
        let kb = Object.keys(b)
        if (ka.length !== kb.length) return false
        for (let i of ka) {
            if (!isEqual(a[i], b[i])) return false
        }
        return true
    }
    return false
  }

  function reverse(arr) {
    function swap(arr, a,b) {
      let c = arr[a]
      a = b 
      b = c
    }
    for (let i = 0; i < arr.length/2; i++) {
      swap(arr,i,arr.length - i)
    }
    return arr
  }

  //Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).
  // 和every类似 仅返回值不同
  function countBy(collection, predicate) {
    if (!predicate) return collection
    let k = Object.keys(collection)
    let p = f(predicate)
    let result = {}
    for (let i of k) {
      if(!result[p(collection[i])]) {
        result[p(collection[i])]= 1
      }else{
        result[p(collection[i])]++
      }
    }
    return result
  
    function f(p) {
        if (typeof p == 'function') return p
        if (typeof p == 'string') return n => n[p]
    }
  }

    //Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).
  // 对数组/对象,通过 函数/key 迭代生成带新key 的 对象
  // 重写 和 countBy 类似 仅返回值不同
  function keyBy(collection, predicate) {
    if (!predicate) return collection
    let k = Object.keys(collection)
    let p = f(predicate)
    let result = {}
    for (let i of k) {
        result[p(collection[i])] = collection[i]
    }
    return result
  
    function f(p) {
        if (typeof p == 'function') return p
        if (typeof p == 'string') return n => n[p]
    }
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
    keys:keys,
    map:map,
    fill,fill,
    values:values,
    valuesIn:valuesIn,
    flatten:flatten,
    flattenDeep:flattenDeep,
    flattenDepth:flattenDepth,
    conformsTo:conformsTo,
    every:every,
    some:some,
    findLastIndex:findLastIndex,
    findIndex:findIndex,
    filter:filter,
    reduce:reduce,
    zip:zip,
    unzip:unzip,
    isEqual:isEqual,
    reverse:reverse,
    countBy:countBy,
    keyBy:keyBy,
  }
} ();

