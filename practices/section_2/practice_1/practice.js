function count_same_elements(collection) {
  var result = [];
  //循环遍历所给数组
  for( var i = 0; i < collection.length; i++){
    var isExist = false;
    //与结果数组中对比如果存在，则count++
    for(var j = 0; j < result.length; j++){
      if(collection[i] === result[j].key){
          result[j].count++;
          isExist = true;
      }
    }
    if(!isExist){
      //与结果数组中对比如果不在，则在结果数组追加
      var temp = {};
      temp.key = collection[i];
      temp.count = 1;
      result.push(temp);
    }
  }
  return result;
}

module.exports = count_same_elements;
