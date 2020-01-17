const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');
const tl = gsap.timeline({paused: true, repeat:2, yoyo: true});

gsap.to(".nav-links", {duration: 2, x: 300, color: "white", ease: "back"});

tl.to('.cover', 1, {
  width: '60%',
  ease: Power2.easeOut
})
.to('nav', 1, {
  height: '100%',
  ease: Power1.easeOut
}, 
"-= 0.5"
)
.fromTo('.nav-open',{
  opacity: 0,
  x: 50,
  ease: Power1.easeout
}, {
  opacity: 1,
  x: 0,
  onComplete: function(){
    navOpen.style.pointerEvents = 'auto';
    console.log('done');
  }
}
);
navButton.addEventListener('click', ()=> {
  if(tl.isActive()){
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
  }
  //toggleDirection(tl);
  tl.play();
  
});
//function toggleDirection(tween)
//{
  //tween.reversed() ? tween.play() : tween.reverse();
//}