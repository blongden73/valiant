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
