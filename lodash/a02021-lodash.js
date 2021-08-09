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

  // 已改写: 和every类似 仅输出不同
  function dropWhile(array,ite) {
  let p = f(ite)
  for (let i in array) {
    if (!p(array[i])) return array.slice(i)
  }
  return []
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
    return setTimeout(() => {
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
  function map(arg, ite){
    let result = []
    let p = f(ite)
    let k = Object.keys(arg)
    for (let i in k) {
      result.push(p(arg[k[i]],Number(i),arg))
    } 
    return result
    function f(n) {
      if (typeof n == 'function')  return n
      if (typeof n == 'string') {
        let arr = []
        let cas = []
        for (let i of n) {
          if (i !== '[' && i !== ']' && i !== '.') {
              cas += i
          } else if (cas) {
              arr.push(cas)
              cas = ''
          }
        }
        if (cas) arr.push(cas)
        return m => {
          for (let i of arr) {
            if (!m[i]) return undefined
            m = m[i]
          }
          return m
        }
      }
    }
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
        if (p(collection[i])) return Number(i)
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
        if (p(collection[i])) return Number(i)
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

  //This method is like _.reduce except that it iterates over elements of collection from right to left.
  //从右边开始 (对索引取反)
  function reduceRight(obj,f,init) {
    let k = Object.keys(obj)
    k.reverse()
    let result = init
    let start = 0
    if (!init) {
      result = obj[k[0]]
      start = 1
    }
      for (let i = start ;i< k.length;i++) {
        result = f(result,obj[k[i]],i)
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
      arr[a] = arr[b] 
      arr[b] = c
    }
    for (let i = 0; i < arr.length/2 ; i++) {
      swap(arr,i,arr.length - i - 1)
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

  //Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
  //Fisher–Yates shuffle 算法
  // 每次取随机数 k 作为索引,取出数组[k],放到新数组的尾部
  function shuffle(arr) {
    let result = []
    let cas = arr
    for (let i = arr.length - 1; i>=0; i--) {
      let k = Math.floor(Math.random()*(i+1))
      result.unshift(cas[k])
      cas = cas.slice(0,k).concat(cas.slice(k+1))
    }
    return result
  }
  
  //Computes the sum of the values in array.
  function sum(arr) {
    let result = 0
    for (let i of arr) {
      result += i
    }
    return result
  }

  function sumBy(arr,ite) {
    let result = 0
    let p = f(ite)
    for (let i of arr) {
      result += p(i)
    }
    return result
    function f(n){
      if(typeof n === 'string') return m => m(n)
      if(typeof n === 'function') return n 
    }
  }

  //Checks if value is NaN.
  function isNaN(n) {
    if(typeof n === 'object') {
      n = n.valueOf()
    }
    return n !== n
  }

  //Checks if value is null.
  function isNull(n) {
    return n === null
  }

  //Checks if value is null or undefined.
  function isNil(n) {
    return n === null || n === undefined
  }

  //Checks if value is undefined
  function isUndefined(n) {
    return  n === undefined
  }

  // Converts value to an array.
  function toArray(val) {
    let result = []
    try {
      let k = Object.keys(val)
      for (let i of k) {
        result.push(val[i])
      }
    } finally {
    return result
    }
  }

  //The inverse of _.toPairs; this method returns an object composed from key-value pairs.
  function fromPairs(pairs) {
    let result = {}
    for (let i of pairs) {
      result[i[0]] = i[1]
    }
    return result
  }

  //Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.
  function toPairs(obj) {
    let result = []
    let k = Object.keys(obj)
    for (let i of k) {
      result.push([i,obj[i]])
    }
    return result
  }

  // Gets the first element of array.
  function head(arr) {
    return arr[0]
  }

  // Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.
  // 找出第一个匹配值的下标
  function indexOf(arr,val,index = 0) {
    if(index < 0) index = 0
    let p = f(val)
    for (let i = index; i < arr.length; i++) {
      if (p(arr[i])) return i
    }
    return -1
    function f(n) {
      if (isNaN(val)) return m => isNaN(m)
      return m => m === n
    }
  }

  //This method is like _.indexOf except that it iterates over elements of array from right to left.
  // (从右往左)找出第一个匹配值的下标
  function lastIndexOf(arr,val,index = arr.length - 1) {
    if (index < 0 || index > (arr.length - 1)) return -1
    let len = arr.length - 1
    return len - indexOf(arr.reverse(), val,len - index)
  }

  //Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
  // 找出所有相同值 返回新数组
  //includes使用的比较算法是SameValueZero
  // 不要重复值 按第一个数组的值顺序排列
  // function intersection(...arrs) {
  //   let cas = Array.from(new Set(arrs[0])) 
  //   let nex = []
  //   for (let i = 1; i < arrs.length ; i++) {
  //     cas.forEach(n => {
  //       if (arrs[i].includes(n) ) nex.push(n)
  //     })
  //     cas = nex
  //     nex = []
  //   }
  //   return cas
  //   // includes使用的比较算法是SameValueZero
  // }
  function intersection(...arrs) {
    arrs[0] = Array.from(new Set(arrs[0])) 
    function cp(a,b) {
      let nex = []
      a.forEach(n => {if (b.includes(n)) nex.push(n)})
      return nex
    }
    return arrs.reduce(cp)
    // includes使用的比较算法是SameValueZero
  }

  //This method is like _.intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
// 比较器接收1个参数
  function intersectionBy(...arrs) {
    let p = f(arrs[arrs.length-1])
    arrs = arrs.slice(0,arrs.length-1)
    function cp(a,b) {
      let nex = []
      a.forEach(n => {
        b.forEach(m => {
          if (p(n) == p(m)) nex.push(n)
        })})
      return nex
    }
    return arrs.reduce(cp)
    function f(n) {
      if (typeof n === 'string') return m => m[n]
      if (typeof n === 'function') return n
    }
  }

  //This method is like _.intersection except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
  // 比较器同时接收2个参数
  function intersectionWith(...arrs) {
    let p = f(arrs[arrs.length-1])
    arrs = arrs.slice(0,arrs.length-1)
    function cp(a,b) {
      let nex = []
      a.forEach(n => {
        b.forEach(m => {
          if (p(n,m)) nex.push(n)
        })})
      return nex
    }
    return arrs.reduce(cp)
    function f(n) {
      if (typeof n === 'string') return m => m[n]
      if (typeof n === 'function') return n
    }
  }

  //Creates a new array concatenating array with any additional arrays and/or values.
  function concat(arr,...args) {
    let result = arr
    args.forEach(n => {
      if (typeof n === 'object') {
        result.push(...n)
      } else {
      result.push(n)
      }
    })
    return result
  }

  //Checks if value is a pristine native function.
  // 将函数名转化为string 调用原型hasOwnProperty()
  function isNative(val) {
    if (!val) return false
    let type = [String,Number,Boolean,Array,Object]
    let nam = val.toString().match(/(?<=function )\w+/)[0]
    for (let t of type) {
      if(t.prototype.hasOwnProperty(nam)) return true
    }
    return false
  }
  
  //Gets all but the last element of array.
  function initial(arr) {
    return arr.slice(0,arr.length-1)
  }

  function parseJson(str) {
    let cas = str
    return parseType(cas)
    function parseType(n) {
      let a = n[0]
      if (a === '\"') return parseString(n)
      if (!isNaN(a)) return parseNumber(n)
      if (a === '[') return parseArray(n)
      if (a === 't') return parseTrue(n)
      if (a === 'n') return parseNull(n)
      if (a === '{') return parseObject(n)
    }
  
    function parseString(n) {
      if (n[n.length-1] !== '\"') return "parse s error!"
      return cas.slice(1,cas.length -1)
    }
    function parseNumber(n) {
      if (isNaN(n)) return "parse n error!"
      return Number(n)
    }
    function parseArray(n) {
      if (n[n.length-1] !== ']') return "parse arr error!"
      let r = []
      let c = ""
      n = n.slice(1,n.length-1)
      for (let i of n) {
        if (i !== ',') c += i
        if (i === ',') {
          if(c[0] == '{') {
            if (c[c.length-1] == '}') {
              r.push(parseJson(c))
              c = ""
            } else {
              c += i
            }
          } else if(c[0] == '[') {
            if (c[c.length-1] == ']') {
              r.push(parseJson(c))
              c = ""
            } else {
              c += i
            }
          } else {
            r.push(parseJson(c))
            c = ""
          }
        }
      }
      if (c !== "") r.push(parseJson(c))
      return r
    }
    function parseTrue(n) {
      if (n !== "true") return "parse error!"
      return true
    }
    function parseNull(n) {
      if (n !== "null") return "parse error!"
      return null
    }
    function parseObject(n) {
      if (n[n.length-1] !== "}") return "parse obj error!"
      let r = {}
      let c = ""
      let d = ""
      n = n.slice(1,n.length-1)
      for (let i =0; i<n.length;i++) {
        while (n[i] !== ":" && i<n.length) {
          c += n[i]
          i++
        }
        let p = parseJson(c)
        c = ""
        i++
        while (n[i] !== "," && i< n.length) {
          d += n[i]
          i++
          if(d[0] === '[' && n[i] === ',' && d[d.length - 1] !== ']') {
            d += n[i]
            i++
          }
          if(d[0] === '{' && n[i] === ',' && d[d.length - 1] !== '}') {
            d += n[i]
            i++
          }
        }
        r[p] = parseJson(d)
        d = ""
      }
      return r
    }
  }
  
  //Converts all elements in array into a string separated by separator.
  function join(array, separator = ',') {
    let result = array[0].toString()
    separator = separator.toString()
    for (let i = 1; i < array.length; i++) {
      result += separator + array[i].toString() 
    }
    return result
  }

  //Gets the last element of array.
  function last(array) {
    return array.pop()
  }

  //Gets the element at index n of array. If n is negative, the nth element from the end is returned.
  function nth(array, n = 0) {
    return n < 0 ? array[array.length + n] : array[n]
  }

  //Removes all given values from array using SameValueZero for equality comparisons.
  function pull(arr, ...vals) {
    for (let i = 0; i < arr.length; i++) {
      if (vals.includes(arr[i])) {
      // includes 使用SameValueZero算法
        arr.splice(i,1)
        i--
      }
    }
    return arr
  }

  //This method is like _.pull except that it accepts an array of values to remove.
  function pullAll(arr, vals) {
    return pull(arr,...vals)
  }

  // This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: (value).
  // 比较器接收1个参数
  function pullAllBy(arr, vals, ite) {
    let p = f(ite)
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < vals.length; j++) {
        if (p(vals[j]) === p(arr[i])) {
          arr.splice(i,1)
          i--
          break
    }}}
    return arr
    function f(n) {
      if (typeof n === 'string') return m => m[n]
      if (typeof n === 'function') return n
    }
  }

  //This method is like _.pullAll except that it accepts comparator which is invoked to compare elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).
  // 比较器接收2个参数
  function pullAllWith(arr, vals, ite) {
    let p = f(ite)
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < vals.length; j++) {
        if (p(vals[j],arr[i])) {
          arr.splice(i,1)
          i--
          break
    }}}
    return arr
    function f(n) {
      if (typeof n === 'string') return m => m[n]
      if (typeof n === 'function') return n
    }
  }

  //Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.
  // 使用 二分法检索 值应该插入已排序数组的位置,返回下标
  function sortedIndex(arr,val) {
    let mid = Math.floor(arr.length/2)
    let min = 0
    let max = arr.length - 1
    while (true) {
      if (arr[mid] == val) return mid
      if (arr[mid] < val) min = mid 
      if (arr[mid] > val) max = mid
      if ((max - min) == 1) return max
      mid = Math.floor((min+max)/2)
    }
  }

  // This method is like _.sortedIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).
  // 比较器接收1个参数  
  function sortedIndexBy(arr,value,ite) {
    let p = f(ite)
    let val = p(value)
    let mid = Math.floor(arr.length/2)
    let min = 0
    let max = arr.length - 1
    while (true) {
      let cur = p(arr[mid])
      if (cur == val) return mid
      if (cur < val) min = mid 
      if (cur > val) max = mid
      if ((max - min) == 1) return max
      mid = Math.floor((min+max)/2)
    }
    function f(n) {
      if (typeof n === 'string') return m => m[n]
      if (typeof n === 'function') return n
    }
  }

  //This method is like _.indexOf except that it performs a binary search on a sorted array.
  // 和sortedIndex 返回值不同(没有匹配值返回-1)
  // 返回下标最小的匹配
  function sortedIndexOf(arr,val) {
    let mid = Math.floor(arr.length/2)
    let min = 0
    let max = arr.length - 1
    if (arr[0] == val) return 0
    let result = -1
    while (true) {
      let cur = arr[mid]
      if (cur == val) {
        result = mid
        max = mid
      }
      if (cur < val) min = mid 
      if (cur > val) max = mid
      if ((max - min) == 1) return result
      mid = Math.floor((min+max)/2)
    }
  }

  //This method is like _.sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.
  // 和sortedIndex 返回值不同
  // 返回匹配结果最大的下标
  function sortedLastIndex(arr,val) {
    let mid = Math.floor(arr.length/2)
    let min = 0
    let max = arr.length - 1
    while (true) {
      let cur = arr[mid]
      if (cur <= val) min = mid 
      if (cur > val) max = mid
      if ((max - min) == 1) return max
      mid = Math.floor((min+max)/2)
    }
  }

  //This method is like _.sortedLastIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).
  // 返回匹配结果最大的下标
  function sortedLastIndexBy(arr,value,ite) {
    let p = f(ite)
    let val = p(value)
    let mid = Math.floor(arr.length/2)
    let min = 0
    let max = arr.length - 1
    while (true) {
      let cur = p(arr[mid])
      if (cur < val) min = mid 
      if (cur > val) max = mid
      if ((max - min) == 1) return max
      mid = Math.floor((min+max)/2)
    }
    function f(n) {
      if (typeof n === 'string') return m => m[n]
      if (typeof n === 'function') return n
    }
  }

  //This method is like _.lastIndexOf except that it performs a binary search on a sorted array.
  function sortedLastIndexOf(arr,val) {
    let mid = Math.floor(arr.length/2)
    let min = 0
    let max = arr.length - 1
    if (arr[0] == val) return 0
    let result = -1
    while (true) {
      let cur = arr[mid]
      if (cur == val) {
        min = mid
        result = mid
      }
      if (cur < val) min = mid 
      if (cur > val) max = mid
      if ((max - min) == 1) return result
      mid = Math.floor((min+max)/2)
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
    reduceRight:reduceRight,
    shuffle:shuffle,
    sum:sum,
    sumBy:sumBy,
    isNaN:isNaN,
    isNull:isNull,
    isNil:isNil,
    isUndefined:isUndefined,
    toArray:toArray,
    fromPairs:fromPairs,
    toPairs:toPairs,
    head:head,
    indexOf:indexOf,
    lastIndexOf:lastIndexOf,
    intersection:intersection,
    intersectionBy:intersectionBy,
    intersectionWith:intersectionWith,
    concat:concat,
    isNative:isNative,
    initial:initial,
    parseJson:parseJson,
    join:join,
    last:last,
    nth:nth,
    pull:pull,
    pullAll:pullAll,
    pullAllBy:pullAllBy,
    pullAllWith:pullAllWith,
    sortedIndex:sortedIndex,
    sortedIndexBy:sortedIndexBy,
    sortedIndexOf:sortedIndexOf,
    sortedLastIndex:sortedLastIndex,
    sortedLastIndexBy:sortedLastIndexBy,
    sortedLastIndexOf:sortedLastIndexOf,
  }
} ();

