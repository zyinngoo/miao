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
    }

  compact:
    function (ary) {
      var re = []
      for (var i = 0; i < ary.length; i++) {
        if (ary[i] == Number(ary[i]) || ary[i] !== 0) {

          re.push(ary[i])
        }
      }
      return re
    }

}
