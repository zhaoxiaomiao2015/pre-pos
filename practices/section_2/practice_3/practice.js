function summary_same_elements(collection) {
  //在这里写入代码
  var result=[];
  //循环遍历该数组
  for( var i = 0;i < collection.length; i++){
    var isExist = false;
    //与结果数组相对比，如果有相同的则直接summary++;
    for(var j = 0; j < result.length; j++){
      if(collection[i].substring(0,1) === result[j].name){
        if((parseInt(collection[i].substring(2))>1)){
          temp.summary =  parseInt(collection[i].substring(2));
          result[j].summary=result[j].summary+temp.summary;
        }else{
          result[j].summary++;
        }

        isExist = true;
      }
    }
    if(!isExist){  //与结果数组相对比，如果没有相同的则新建一个，然后追加到结果数组之后
      var temp = {};
      //截取之后再赋值
      temp.name = collection[i].substring(0,1);
      temp.summary = 0;
      if(collection[i].length>1){//如果该字符串长度大于1，则需要截取，否则直接+1
        temp.summary =  parseInt(collection[i].substring(2));
      }else{
          result[j].summary=result[j].summary+temp.summary;

        temp.summary++;
      }
      result.push(temp);
    }
  }
  return result;
}

module.exports = summary_same_elements;
