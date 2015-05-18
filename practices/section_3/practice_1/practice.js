function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var res = [];
  for(var x = 1; x < collection_a.length; x++){
        for(var y =1; y<object_b.length; y++){
            if(collection_a[x].key == object_b.value[y]){
              collection_a[x].count=collection_a[x].count-1;

                res = [{key: collection_a[x], count:collection_a[x].count }];
            }
        }

}

return res;
}

module.exports = create_updated_collection;
