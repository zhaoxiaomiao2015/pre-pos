function count_same_elements(  collection) {
  var seam=[];
  //循环取出不同的元素
  for(var i = 0; i <  collection.length; i++){
    var isExist = false;//是否找到标示
    for(var j = 0;   j <  seam.length; j++ ){
      //  如果存在则count++
      if( collection[i] === seam[j].key){
          seam[j].count  ++;
          isExist = true;
          }
      }
      if(!isExist){ //则说明是个新元素，需要创建
        var temp = {};
              temp.key = collection[i];
              temp.count = 1;
              //建立结果类型数组
              seam.push(temp);
            }
  }
  return seam;
}

module.exports = count_same_elements;
