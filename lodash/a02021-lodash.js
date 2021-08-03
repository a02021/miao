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
    console.log(typeof arrs)
    if(arrs.length == 0) return array
    var rel = []
    var newArrs = arrs.filter(it => it instanceof Array).reduce(
      (a,b) => a.concat(b))
    array.map(i => {if(newArrs.indexOf(i) == -1) rel.push(i)})
  return rel
  }
  return {
    chunk:chunk,
    compact:compact,
    difference:difference,
  }
} ();

// function dsd(...arr){
//   console.log(arr)
// }

// function difference(array, ...arrs) {
//   console.log(typeof arrs)
//   if(arrs.length == 0) return array
//   var rel = []
//   var newArrs = arrs.filter(it => it instanceof Array).reduce(
//     (a,b) => a.concat(b))
//   array.map(i => {if(newArrs.indexOf(i) == -1) rel.push(i)})
// return rel
// }
// console.log(difference([1,2,3],[2],1,['k'],[3]))