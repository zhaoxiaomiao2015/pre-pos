function collect_same_elements(collection_a, collection_b) {
  var result =[];
   for(var x=0;x< collection_a.length;x++){
         for( var y=0; y< collection_b.value.length; y++){
           if(collection_a[x]  ==  collection_b.value[y] ){
         result.push ( collection_a[x]  );
           }
       }
    }
    return   result;
}

module.exports = collect_same_elements;
