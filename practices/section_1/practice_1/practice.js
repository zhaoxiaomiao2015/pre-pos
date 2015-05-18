function collect_same_elements(collection_a, collection_b) {

//定义最终接受结果的数组
  var result =[];
//  比较两个数组，将相同部分放入最终结果中
 for(var x=0;x< collection_a.length;x++){
       for( var y=0; y< collection_b.length; y++){
         if(collection_a[x]  ==  collection_b[y] ){
          // collection_c.push(collection_B[i]);
       result.push ( collection_a[x]  );
         }
     }
}
  return   result;


}
module.exports = collect_same_elements;
