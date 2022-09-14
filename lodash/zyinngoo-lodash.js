var zyinngoo = {
  chunk:
    function(ary, size) {
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
    },

  compact:
    function(ary) {
      var re = []
      for (var i = 0; i < ary.length; i++) {
        if (Boolean(ary[i])) {
          re.push(ary[i])
        }
      }
      return re
    },

  difference:
    function(...arr) {
      return  arr.reduce((result, it) => {
              var re = []
              for (var i = 0; i < result.length; i++) {
                if (!(it.includes(result[i])))
                  re.push(result[i])
              }
              return re
            })
    },

}
