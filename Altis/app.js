const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");



//ScrollMagic

const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration:8600, //видео 9 секунд => более оптимальная продолжительность анимации
  triggerElement: intro,
  triggerHook: 0
})

.setPin(intro)
.addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);


//Video animation

let acelamount = 0.6;
let scrollpos = 0;
let delay = 0;

scene.on("update", e =>{
  scrollpos = e.scrollPos / 1000; //превращаем милисекунды в секунды (т.е. будет 9 секунд)
});

setInterval(()=>{
  delay += (scrollpos - delay) * acelamount;
  video.currentTime = delay;
},70.3);
