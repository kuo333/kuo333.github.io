let prizeWeight = [15,15,15,55];
let list = prizeWeight.slice();
let sum = [0,0,0,0];
for(let i = 0 ; i < list.length ; i++){
    if(i==0){
        list[i] = list[i];
    }
    else{
        list[i] = list[i]+list[i-1];
    }
}
let weightSum = prizeWeight.reduce(function(prevValue,curVal){
    return prevValue + curVal;
});
for(let i = 0 ; i < 100 ; i++){
    let weightRandom = parseInt(Math.random()*weightSum)+1;
    let concatAfterArr = list.concat(weightRandom);
    let sortedWeightArr  = concatAfterArr.sort(function(a,b){ return a-b });
    var randomIndex = sortedWeightArr.indexOf(weightRandom);
    randomIndex = Math.min(randomIndex, prizeWeight.length -1);
    switch(randomIndex){
        case 0:
            sum[0]++;
            break;
        case 1:
            sum[1]++;
            break;
        case 2:
            sum[2]++;
            break;
        case 3:
            sum[3]++;
            break;
    }    
}
console.log(sum);