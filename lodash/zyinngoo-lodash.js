var zyinngoo = {
  chunk: function (ary, size) {
    var re = []
    var arr = []
    for (var i = 0; i < ary.length; i++) {
      if (i % size == 0) {
        re.push(arr)
        var arr = []
      }
      arr.push(ary[i])
    }
    re.unshift()
    return re
  }

  compact: function () {}




















}
