/* Javascript Cookie Cliker
 *
 * on click of cookie increase the counter
 *
 */

(function() {
    let labelData = document.getElementById("cookieLabel");
    let counter = 0;
    let score = 0;
        // your code here
   document.getElementById("run").addEventListener("click",()=>{
    
    labelData.innerHTML = ++counter;
    console.log("cnt = "+counter);
   });
   //Purchase cookie
   document.getElementById("purchase").addEventListener("click",()=>{
    if(counter >= 30) {
        document.getElementById("purchaseCookie").innerHTML = score + 1;
        counter = counter - 30;
        cookieLabel.innerHTML = counter;
    }
    document.getElementById("scorePurchase").innerHTML = 30;
   });
    

})();