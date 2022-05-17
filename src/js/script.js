(function() {
    let cookieImg = document.getElementById("cookieImg");
    let scoreDisplay = document.getElementById("scoreLabel");
    let purchaseCookieValue =  document.getElementById("purchaseCookie");
    let multiplierPurchaseLabel = document.getElementById("scorePurchase");


    let score = 0;
    let multiplierValue = 1; //initially set it as 1
    let multiplierPurchaseValue = 10;
    let firstClick = 0; // if not define then the output will display double value each time
    

    /*
    *   Display values to lables using function
    */
    var assignVal =(element,value)=>{
        element.innerText = value;
    }
    assignVal(purchaseCookieValue,multiplierValue);
    assignVal(multiplierPurchaseLabel,multiplierPurchaseValue);

    /*
    *   On cookie image click increase score by 1
    */
   document.getElementById("cookieImg").addEventListener("click",()=>{
        if(multiplierValue > firstClick){
            score = score + multiplierValue;
            assignVal(scoreDisplay,score);
            console.log("score = "+score +" multiplierValue = "+multiplierValue+" firstClick = "+firstClick);
        }
   });
   
   /*
   *    Multiplier cookie 
   */
   document.getElementById("purchase").addEventListener("click",()=>{
        if(score >= multiplierPurchaseValue){

            multiplierValue++;firstClick++;
            score = score - multiplierPurchaseValue;
            score = score * multiplierValue;
            assignVal(purchaseCookieValue,multiplierValue);
            multiplierPurchaseValue = multiplierPurchaseValue + multiplierValue + 10 + score;
             assignVal(scoreDisplay,score);
            assignVal(multiplierPurchaseLabel,multiplierPurchaseValue);
        }
   });

    /*
    * when user purchase the auto cookie maker then increse score by 1 for each second
    */
       
   document.getElementById("autoClickBtn").addEventListener("click",()=>{
         setInterval(()=> {
            indexVariable = ++score % 360 + 1; // SET { 1-360 }
            assignVal(scoreDisplay,score);
        }, 1000);
         
   });
})();