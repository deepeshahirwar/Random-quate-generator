 
//  logic for random background img
function refresh() {
    // Generate a random number to get a new image from Unsplash
    var randomNumber = Math.floor(Math.random() * 1000);
    var imageUrl = "https://source.unsplash.com/random/1600x900?sig=" + randomNumber;

    // Set the new background image
    document.querySelector('body').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(' + imageUrl + ')';
}  
//the function will run in every 5 seconds
 setInterval(refresh,90000);  
 


// logic for random quote generator 
const quoteText = document.querySelector(".quote"),
 quoteBtn = document.querySelector("button"),
  authorName = document.querySelector(".name"), 
   soundBtn =  document.querySelector(".sound"), 
   copyBtn =  document.querySelector(".copy"),
   twitterBtn =  document.querySelector(".twitter"); 

 
 // random quote function 
 function randomQuote(){ 
    quoteBtn.innerHTML="Loading...";
  fetch("https://api.quotable.io/random").then(res => res.json()) .then(result =>{
    console.log(result); 
    //author , content 
    quoteText.innerHTML = `" ${result.content} "`; 
    authorName.innerHTML = result.author; 
    quoteBtn.innerHTML="New Quote";
  }); 

 }  

 // text speech 
 soundBtn.addEventListener("click",()=>{ 
    // the SpeechSynthesisUtterance is web speech api that represents a speech resquest
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`);
 
  //speak method of speechSynthesis speeks the utterance
  speechSynthesis.speak(utterance);
 });
 
 // for copy quote of text
 copyBtn.addEventListener("click",()=>{ 
    // copying the quote text on copyBtn click 
  navigator.clipboard.writeText(quoteText.innerHTML);
 });

 // for twitter post
 twitterBtn.addEventListener("click",()=>{ 
    let tweetUrl =`https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(tweetUrl,"_black");
 });

 quoteBtn.addEventListener("click", randomQuote);