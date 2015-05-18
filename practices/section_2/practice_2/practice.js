function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  //循环遍历该数组
  for( var i = 0;i < collection.length; i++){
    var isExist = false;
    //与结果数组相对比，如果有相同的则直接count++;
    for(var j = 0; j < result.length; j++){
      if(collection[i] === result[j].key){
        result[j].count++;
        isExist = true;
      }
    }
    if(!isExist){  //与结果数组相对比，如果没有相同的则新建一个，然后追加到结果数组之后
      var temp = {};
      //截取之后再赋值
      temp.key = collection[i].substring(0,1);
      temp.count = 0;
      if(collection[i].length>1){//如果该字符串长度大于1，则需要截取，否则直接+1
        temp.count =  parseInt(collection[i].substring(2));
      }else{

        temp.count++;
      }
      result.push(temp);
    }
  }
  return result;
}

module.exports = count_same_elements;
