/* Javascript Cookie Cliker
 *
 * on click of cookie increase the counter
 *
 */

(function() {
let labelData = document.getElementById("cookieLabel");
    let counter = 0;
    // your code here
   document.getElementById("run").addEventListener("click",()=>{
    
    labelData.innerHTML = counter++;
    
    //+" tyep of counter = "+typeof(counter));

   });
    

})();