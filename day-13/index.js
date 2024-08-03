var string ='serena';
function findDuplicates(string){
    var output={};
    var largecount=0;
    var repeatedletter='';
    for(let i=0; i<string.length;i++){
        if(output[string[i]]==undefined){
            output[string[i]]=1;
        }else{
            output[string[i]]++;
        }
        if(output[string[i]]>largecount){
            largecount=output[string[i]];
            repeatedletter=string[i];
        }
    }
    return {repeatedletter,largecount};
}
let result=findDuplicates(string);
console.log(result.repeatedletter)


