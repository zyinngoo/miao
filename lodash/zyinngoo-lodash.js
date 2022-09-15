var zyinngoo = function () {
    // 辅助函数









    // 上传函数
    function chunk(ary, size) {
      var re = []
      var arr = []
      for (var i = 0; i < ary.length; i++) {
        if (i % size == 0) {
          re.push(arr)
          var arr = []
        }
        arr.push(ary[i])
      }
      re.push(arr)
      re.shift()
      return re
    }


    function compact(ary) {
      var re = []
      for (var i = 0; i < ary.length; i++) {
        if (Boolean(ary[i])) {
          re.push(ary[i])
        }
      }
      return re
    }

    function difference(...arr) {
      return  arr.reduce((result, it) => {
      var re = []
              for (var i = 0; i < result.length; i++) {
                if (!(it.includes(result[i])))
                  re.push(result[i])
              }
              return re
            })
    }

    function fill(array, value, start = 0, end = array.length) {
      for (var i = start; i < end; i++) {
        array[i] = value
      }
      return array
    }

    function drop(arr, n = 1) {
      arr.splice(0, n)
      return arr
    }

    function findindex(array, predicate , fromIndex = 0) {
      if (Array.isArray(predicate)) {
        for (var i = fromIndex; i < array.length; i++) {
            for (var key in array[i]) {
                if (key === predicate[0] && array[i][key] === predicate[1]) return i
            }
        }
      }
      if (typeof predicate === 'object') {
          for (var i = fromIndex; i < array.length; i++) {
              var flag = true
              for (var key in predicate) {
                  if (key in array[i] && predicate[key] === array[i][key]) continue
                  else flag = false
              }
              if (flag) return i
          }
      }
      if (typeof predicate === 'string') {
          for (var i = fromIndex; i < array.length; i++) {
              if (array[i][predicate] === true) return i
          }
      }
      if (typeof predicate === 'function') {
          for (var i = fromIndex; i < array.length; i++) {
              if (predicate(array[i])) return i
          }
      }
      return -1
    }


    return {
      chunk,
      drop,
      compact,
      findindex,
      difference,
      fill,
    }
}
