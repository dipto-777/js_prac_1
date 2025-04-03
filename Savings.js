const monthlySavings = (array=[],x=0) => {
    if(!Array.isArray(array) || typeof(x)!="number"){
        return "invalid input";
    }
    
    let savings=0;
    array.forEach(element => {
        savings+=element;
        if(element>=3000){
            savings-=(element*0.2);
        }
    });
    return savings-x;
}

let monthlysavings = monthlySavings([1000,2000,3000],"hk");

if(monthlysavings<0){
    console.log("earn more");
}
else{
    console.log(monthlysavings);
}
