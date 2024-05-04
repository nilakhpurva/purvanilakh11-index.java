function checkNo(){
    const num=document.getElementById("number").value;

    if(!num){

        alert("Please enter the number");
    }
    else if(num%2==0 ){
        alert(`Number ${num} is even`);
    }
    else{

        alert(`Number ${num} is Odd`);
    }
}