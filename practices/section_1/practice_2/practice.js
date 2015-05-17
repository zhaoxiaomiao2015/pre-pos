function collect_same_elements(collection_a, collection_b) {

//  比较两个数组，将相同部分放入最终结果中
var result =[];
 for(var x=0;x< collection_a.length;x++){
       for( var y=0; y< collection_b[0].length; y++){
         if(collection_a[x]  ==  collection_b[0][y] ){
       result.push ( collection_a[x]  );
         }
     }
  }
  return   result;
}

module.exports = collect_same_elements;
