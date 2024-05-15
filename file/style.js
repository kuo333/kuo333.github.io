let wapper = document.querySelector(".wapper");
    let textAll = document.querySelectorAll(".wapper .text");
    
    let prize = ["1號","2號","3號","4號"];    
    
    let prizeWeight = [15,55,15,15];
    let list = prizeWeight.slice();
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
    for(let i = 0 ; i < textAll.length ; i++){
            textAll[i].innerHTML = prize[i];  
    }
    let isFlag = true;

    document.querySelector(".circle").onclick=function(){
        //console.log(123);
        if(isFlag){
            let weightRandom = parseInt(Math.random()*weightSum)+1;        
            let concatAfterArr = list.concat(weightRandom);        
            let sortedWeightArr  = concatAfterArr.sort(function(a,b){ return a-b });        
            var randomIndex = sortedWeightArr.indexOf(weightRandom); 
            randomIndex = Math.min(randomIndex, prize.length -1); 
            console.log(randomIndex);            
            let text = prize[randomIndex];
            
            switch(randomIndex){
                case 0:
                    run(45,text);
                    break;
                case 1:
                    run(135,text);
                    break;
                case 2:
                    run(315,text); 
                    break;
                case 3:
                    run(225,text);
                    break;
            }
        }        
    };
    function run(angle,text){
    isFlag = false;
    let begin = 0; 
    let timer = null;
    let basic = 1800;
    timer = setInterval(function(){
        if(begin > (basic+angle)){
            isFlag = true;
            clearInterval(timer);
        }
        wapper.style.transform="rotate("+(begin)+"deg)";
        
        begin+=Math.ceil(basic+angle-begin)*0.1;
    },50);
}