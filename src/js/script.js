(function() {
    let cookieImg = document.getElementById("cookieImg");
    let scoreDisplay = document.getElementById("scoreLabel");
    let purchaseCookieValue =  document.getElementById("purchaseCookie");
    let multiplierPurchaseLabel = document.getElementById("scorePurchase");
    let countdownDiv = document.getElementById('countDown');
    let bonusPurchaseLabel = document.getElementById("bonusPurchase");

    /*
    * initialise buttons
     */
    let multiplierBtn = document.getElementById("purchase");
    let autoClickBtn = document.getElementById("autoClickBtn");
    let bonusBtn = document.getElementById("bonusClickBtn");



    let score = 0;
    let multiplierValue = 1; //initially set it as 1
    let multiplierPurchaseValue = 30;
    let firstClick = 0; // if not define then the output will display double value each time
    let timeLeft = 30;
    let bonusPurchase = 500;
    let bonusEnable = false;
    let bonusClickFlag = false;

/*
 * onload page disable the Multiplier (purchase), autocliker and Bonus button disabled
*/
multiplierBtn.disabled = true;
autoClickBtn.disabled = true;
bonusBtn.disabled = true;
/*
*   Enable the buttons on particular score values
*/

if(score >= multiplierPurchaseValue){
    multiplierBtn.disabled = false;
}else{
   // alert("you need to increase your score");
}
if(multiplierValue >= 3){
    autoClickBtn.disabled = false;
}else{
    //alert("you need atleast 3 cookies to buy auto cookie maker");
}
if(multiplierValue >= 3 && score >= bonusPurchase){
    bonusBtn.disabled = false;
}else{
    //alert("you need to increase your score and need atleast 5 cookies to purchase");
}



    /*
    *   Display values to lables using function
    */
    var assignVal =(element,value)=>{
        element.innerText = value;
    }
    assignVal(purchaseCookieValue,multiplierValue);
    assignVal(multiplierPurchaseLabel,multiplierPurchaseValue);
    assignVal(bonusPurchaseLabel,bonusPurchase);

    /*
    *   On cookie image click increase score by 1
    */
   document.getElementById("cookieImg").addEventListener("click",()=>{
    console.log("score = "+score +" multiplierValue = "+multiplierValue+" bonusPurchase = "+bonusPurchase);
    /*
    * code to enable button at particular score
     */
        if(score >= multiplierPurchaseValue){
            multiplierBtn.disabled = false;
        }
        if(multiplierValue >= 3){
            autoClickBtn.disabled = false;
        }
        if(multiplierValue >= 3 && score >= bonusPurchase){
            bonusBtn.disabled = false;
        }
        /* End of enabling button code*/

        if(multiplierValue > firstClick && score <= 10000000){
            /*
            * On eack click of cookie increase score by multiplier. on page load as multiplier value is 1 then the score *
            * increase by 1.
             */
            score = score + multiplierValue;
            assignVal(scoreDisplay,score);
            //console.log("score = "+score +" multiplierValue = "+multiplierValue+" firstClick = "+firstClick);

            /**
             * if bonus button is enable and 
             */
            if(bonusEnable == true){
                
                if(bonusClickFlag == true){
                    var timerId = setInterval(countdown, 1000);
                    console.log("score in = "+score);
                    assignVal(scoreDisplay,score);
                    score = score + parseInt((score * 30) / 100); //increase score by 20% for each click up to 30 seconds.
                }
            }
            /*End of  Bonus button code*/
        }else {
            alert("Congratulations, You win..!");
            score = 0;
        }
   });

   /**
    * Bonus 30 second timer display
    */
    function countdown() {
        if (timeLeft < 0) {
            clearTimeout(timerId);
            timeLeft = 30;
            bonusEnable = false;
            if(timeLeft == 0){
                document.getElementById("bonusClickBtn").disabled = true;
            }
        } else {
            assignVal(countdownDiv,timeLeft);
            timeLeft--;
            if(timeLeft == 0){
                document.getElementById("bonusClickBtn").disabled = true;
            }
        }
    }
    
   /*
   *    Multiplier cookie 
   */
   document.getElementById("purchase").addEventListener("click",()=>{
       //if(){}else{}
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
        document.getElementById("autoClickBtn").disabled = 'true';
   });

   

   document.getElementById("bonusClickBtn").addEventListener("click",()=>{
       if(score < 10000000){
            if(score > bonusPurchase && bonusEnable == false){
                
                score = score - bonusPurchase;
                assignVal(scoreDisplay,score);
                bonusEnable = true; //make the bonus flag enable
                bonusClickFlag = true;
                bonusPurchase = parseInt((bonusPurchase + 30) *0.35); // on each bonus purchase increase the purchasing value of bonus value by 0.35 and add 30 points to it.
        }
       }else{ alert("Congratulations you win..!!!");}
       document.getElementById("bonusClickBtn").disabled = 'true';
   });

})();