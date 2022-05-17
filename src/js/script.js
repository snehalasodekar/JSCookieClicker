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
        if(cookieClicks >= 20 ){ //step 2 : on click to purchase if score is > cookieclicks reduce the score by purchase amount and allow to buy a multiplier cookie and display
            document.getElementById("purchaseCookie").innerHTML = multiplierVal++;
            cookieClicks = cookieClicks - 20;
            cookieLabel.innerHTML = cookieClicks;
        }else if(val2 >=20){
            document.getElementById("purchaseCookie").innerHTML = multiplierVal++;
            val2 = val2 - 20;
            cookieLabel.innerHTML = cookieClicks;
          }else if(val >=20) {
            document.getElementById("purchaseCookie").innerHTML = multiplierVal++;
            val = val - 20;
            cookieLabel.innerHTML = cookieClicks;
        }
        
        document.getElementById("purchaseCookie").innerHTML = multiplierVal;
        console.log("after click purchase cnt = "+cookieClicks);
        console.log("after click purchase val = "+val);
        console.log("after click purchase val2 = "+val2);
   });
    

})();