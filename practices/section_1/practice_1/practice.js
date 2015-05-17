function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  // var collection_c=new Array();  //定义最终接受结果的集和
  // var index=0;
  //  var collection_A = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  // var collection_B = ["a", "d", "e", "f"];

  var result =[];
//  比较两个数组，将相同部分放入最终结果中
 for(var x=0;x< collection_a.length;x++){
       for( var y=0; y< collection_b.length; y++){
         if(collection_a[x]  ==  collection_b[y] ){
          // collection_c.push(collection_B[i]);
       result.push ( collection_a[x]  );
         }
     }
  //返回结果   collection_c = ["a", "e", "f", "d"];
  // collection_c = ["a", "e", "f", "d"];
}
  return   result;


}
module.exports = collect_same_elements;
