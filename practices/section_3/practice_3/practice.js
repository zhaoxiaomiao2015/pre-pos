function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array = [];
  var exist = false;  // 定义标志：是否找到

  for(var i = 0; i < collection_a.length; i++){
    for(var j = 0; j < array.length; j++){
        if(array[j].key == collection_a[i]){  // 判断是否找到
          array[j].count ++;  // 找到count++
          exist = true; // 标志为找到
        }
    }
    if(!exist){   // 找不到，创建
        var temp = {};
        temp.key = collection_a[i];
        temp.count = 1;
        array.push(temp);
      }
      exist = false;    // 默认找不到
    }

    for(var x = 0; x < object_b.value.length; x++){
      for(var y = 0; y < array.length; y++){
        if(object_b.value[x] == array[y].key){
          array[y].count = array[y].count - Math.floor(array[y].count/3);
        }
      }
    }
    return array;
}

module.exports = create_updated_collection;
