var counter = 0;
$(document).bind("mousewheel",function(event){
if(event.originalEvent.wheelDelta > 0){
  counter -= 2;
  console.log(counter);
  $(".outer_box").css({"transform":"perspective(2000px) rotateX("+counter+"deg)"})
}else{
  counter += 2;
  console.log(counter);
  $(".outer_box").css({"transform":"perspective(2000px) rotateX("+counter+"deg)"})
}
})
console.log('hello');
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
