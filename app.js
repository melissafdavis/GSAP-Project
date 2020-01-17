const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');
const hats = document.querySelector('#hats');
const hoodie = document.querySelector('#hoodie');
const hatsLi = document.querySelector('#hats-li');
const hoodieLi = document.querySelector('#hoodie-li');

const tl = gsap.timeline({paused: true});

const hatsTl = gsap.timeline({paused: true});
const hoodieTl = gsap.timeline({paused: true});





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
},
)
;

hatsTl.to('#hats', 1, {
  height: '400px'
})
.to('#hats', 1, {
  height: '250px'
})

hoodieTl.to('#hoodie', 1, {
  height: '400px'
})
.to('#hoodie', 1, {
  height: '250px'
})




navButton.addEventListener('click', ()=> {
  if(tl.isActive()){
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
  }
  toggleDirection(tl);
  tl.play();
  
});
function toggleDirection(tween)
{
  tween.reversed() ? tween.play() : tween.reverse();
}


hats.addEventListener('mouseover', ()=>{
  gsap.to('#hats', 1, {
    height: '400px'
  })
})

hats.addEventListener('mouseout',()=> {
  gsap.to('#hats', 1, {
    height: '250px'
  })
})

hoodie.addEventListener('mouseover', ()=>{
  gsap.to('#hoodie', 1, {
    height: '400px'
  })
})

hoodie.addEventListener('mouseout',()=> {
  gsap.to('#hoodie', 1, {
    height: '250px'
  })
})

hatsLi.addEventListener('click', ()=>{
  hatsTl.play()
})

hoodieLi.addEventListener('click', ()=>{
  hoodieTl.play()
})
