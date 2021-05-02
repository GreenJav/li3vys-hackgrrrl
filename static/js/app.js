// Scroll to top
const scrolltp = document.querySelector("#scrolltp");
scrolltp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= 700) {
    scrolltp.style.opacity = 1;
  } else {
    scrolltp.style.opacity = 0;
  }
});

// Theme

const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");

if (darkmode) {

  // Get Dark mode from local storage
  body.classList.add("dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
  body.classList.toggle("dark");
    
  //  Set Local storage for Dark Mode
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "active");
  } else {
    localStorage.removeItem("dark");
  }
});

// Typewriter Loop
var messages=["ouvir","se expressar","falar"];
var rank=0;

// Code for Chrome, Safari and Opera
document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document.getElementById("myTypewriter").addEventListener("animationend", changeTxt);

function changeTxt(e){
  _h1 = this.getElementsByTagName("h1")[0];
  _h1.style.webkitAnimation = 'none'; // set element animation to none
   setTimeout(function() { // you surely want a delay before the next message appears
      _h1.innerHTML=messages[rank];
      var speed =6.5*messages[rank].length/20; // adjust the speed (3.5 is the original speed, 20 is the original string length
      _h1.style.webkitAnimation = 'typing '+speed+'s steps(40, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
      (rank===messages.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}

// Carousel effect
/*
  @method Cards
  @description this is for label based radio navigation to change the labels style to 'active'
 */
  const Cards = ((() => {
    /*
     * @description dom loaded event listener
     */
    window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);
  
    /*
     * @method init
     * @parameter e {event}
     * @description initiates event listeners on all cards
     */
    function init(e)
    {
      if(document.querySelector(".cards"))
      {
        let cards = document.querySelector(".cards");
        cards.addEventListener('click', clicked, false);
        document.querySelectorAll(".cards .card")[1].click();
      }
    }
  
    /*
     * @method clicked
     * @parameter e {event}
     * @description this is the callback from the assigned event listener binding
     */
    function clicked(e)
    {
      let card = e.target;
      if(card.getAttribute("data-card")){rearrange(card.getAttribute("data-card"));}
    }
  
    /*
     * @method rearrange
     * @parameter card {object}
     * @description this is the callback from the assigned event listener binding
     */
    function rearrange(card)
    {
      let cards = document.querySelectorAll(".cards .card");
      for(let n = 0; n < cards.length; n++)
      {
        cards[n].classList.remove("card--left");
        cards[n].classList.remove("card--center");
        cards[n].classList.remove("card--right");
      }
      cards[card].classList.add("card--center");
      if(card == 0)
      {
        cards[2].classList.add("card--left");
        cards[1].classList.add("card--right");
      }
      if(card == 1)
      {
        cards[0].classList.add("card--left");
        cards[2].classList.add("card--right");
      }
      if(card == 2)
      {
        cards[1].classList.add("card--left");
        cards[0].classList.add("card--right");
      }
    }
  
    return {
      init
    }
  })());
//formulario
