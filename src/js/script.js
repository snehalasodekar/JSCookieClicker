/* Javascript Cookie Cliker
 *
 * on click of cookie increase the counter
 *
 */

(function() {
    let labelData = document.getElementById("cookieLabel");
    let scoreLabel = document.getElementById("scoreLabel");
    let cookieClicks = 0;
    let multiplierVal = 0; //step 2 :variable to increase score by multiplier value
    let val2 =0,val = 0;
    let autoClcik = document.getElementById("autoClcik");
    let autoCookie =3;
    autoClcik.innerHTML = 1;
   let multIncrease = 30;
        scorePurchase.innerHTML = multIncrease;
    let autoClickCost = 150;



        // your code here
   document.getElementById("cookie").addEventListener("click",()=>{
        if(multiplierVal > 0){ //
            val2 = ++cookieClicks * multiplierVal;
            labelData.innerHTML = val2;
            scoreLabel.innerHTML = val2;
            console.log("val2 = "+val2);

        }else{ // step 1 : on click of cookie increase the score.
            val = ++cookieClicks;
            labelData.innerHTML = val;
            scoreLabel.innerHTML = val;
            console.log("val = "+val);
        }
   });
   //Purchase cookie
   document.getElementById("purchase").addEventListener("click",()=>{
    if(multIncrease >= 30 && multIncrease <= cookieClicks ){
        if(cookieClicks >= multIncrease ){ 
            document.getElementById("purchaseCookie").innerHTML = multiplierVal++;
            cookieClicks = cookieClicks - multIncrease;
            cookieLabel.innerHTML = cookieClicks;
            scoreLabel.innerHTML = cookieClicks;
            multIncrease = multIncrease+20+cookieClicks
            scorePurchase.innerHTML = multIncrease;
            
        }else if(val2 >=multIncrease){
            document.getElementById("purchaseCookie").innerHTML = multiplierVal++;
            val2 = val2 - multIncrease;
            scoreLabel.innerHTML = cookieClicks;
            multIncrease = multIncrease+20+cookieClicks
            scorePurchase.innerHTML = multIncrease;
        }else if(val >= autoClcik) {
            document.getElementById("purchaseCookie").innerHTML = multiplierVal++;
            val = val - multIncrease;
            scoreLabel.innerHTML = cookieClicks;
            multIncrease = multIncrease+20+cookieClicks
            scorePurchase.innerHTML = multIncrease;
            
        }
    }
        document.getElementById("purchaseCookie").innerHTML = multiplierVal;
        console.log("after click purchase cnt = "+cookieClicks);
        console.log("after click purchase val = "+val);
        console.log("after click purchase val2 = "+val2);
   });
    
   document.getElementById("autoClickBtn").addEventListener("click",()=>{
    let cookie = document.getElementById("scoreLabel").textContent;
    cookie = parseInt(cookie);
        if(cookie >= autoCookie){
            setInterval(()=>{
                cookie++;
            }, 1000);
            cookieLabel.innerHTML = cookie;
            scoreLabel.innerHTML = cookie;
        } else{
            alert("You don't have enough score to purchase Auto Cookie Maker")
        }
   });
})();