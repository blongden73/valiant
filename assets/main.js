function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

var counter = 0;
$(document).bind("mousewheel",function(event){
if(event.originalEvent.wheelDelta > 0){
  counter -= 2;
  $(".outer_box").css({"transform":"perspective(2000px) rotateX("+counter+"deg)"})
}else{
  counter += 2;
  $(".outer_box").css({"transform":"perspective(2000px) rotateX("+counter+"deg)"})
}
})
var images = document.querySelectorAll('.in_box');
for(var i=0; i < images.length; i++) {
  console.log(images[i]);
  images[i].addEventListener('mouseover', function(){
    console.log('hovers');
    for(var j=0; j<images.length; j++) {
      images[j].classList.remove('hover');
    }
    this.classList.add('hover');
    var data = this.dataset.image;
    var src = document.querySelector('.background-image-src');
    var blur = document.querySelector('.background-image-src-blur');
    src.setAttribute('src', data);
    blur.setAttribute('src', data);
  });
}

function menu(){
  console.log('im here')
  var menubutton = document.querySelector('.activate-menu');
  var nav = document.querySelector('nav');
  var header = document.querySelector('header');
  console.log(menubutton)
  menubutton.addEventListener('click', function(){
    nav.classList.toggle('active');
    header.classList.toggle('active');
    menubutton.classList.toggle('active');
  });
}menu();

function aboutScroller() {
  var para = document.querySelectorAll('.about-page-content p');
  console.log(para);
  var aboutcheck = document.querySelector('.about-page-content');
  if(aboutcheck) {
    para[0].classList.add('inview');
    document.addEventListener('scroll', function(){
      console.log('scrolling');
      for(i=0; i<para.length; i++) {
        if(elementInViewport(para[i])) {
          para[i].classList.add('inview');
        }else {
          para[i].classList.remove('inview');
        }
      }
    });
  }
}aboutScroller();

function audioplayers() {
  var audios = document.querySelectorAll('.listen');
  if(audios){
      for(i=0; i<audios.length; i++) {
        var player = document.querySelector('.artist-audio__player');
        var audioPlayer = player.querySelector('audio');
        var play = player.querySelector('.play');
        var pause = player.querySelector('.pause');
        var progress = player.querySelector('.progress');
        var time = player.querySelector('.time-update');
        console.log(audioPlayer);

        audios[i].addEventListener('click', function(){
          console.log(audioPlayer);
          var track = this.dataset.track;
          var aristName = this.dataset.artist;
          var name = document.querySelector('.audio-player-title');
          audioPlayer.querySelector('source').setAttribute('src', track);
          player.classList.add('playing');
          name.innerText = aristName;
          audioPlayer.load();
          audioPlayer.play();

          console.log(audioPlayer);

          time.innerText = audioPlayer.currentTime;
          setInterval(function(){
            time.innerText = Math.round(audioPlayer.currentTime) + 's';
          }, 1000)

          pause.classList.add('playing');
          play.classList.add('playing');
        });

        play.addEventListener('click', function(){
          audioPlayer.play();
          play.classList.add('playing');
          pause.classList.add('playing');
        });

        pause.addEventListener('click', function(){
          audioPlayer.pause();
          play.classList.remove('playing');
          pause.classList.remove('playing');
        });
      }
  }
}audioplayers();
