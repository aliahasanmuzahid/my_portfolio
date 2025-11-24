AOS.init({
      duration: 1000,
      once: false,
      mirror: true
});

$('#line').click(function(){
    $('#line1').toggleClass('line1');
    $('#line2').toggleClass('line2');
    $('#line3').toggleClass('line3');
    $('#link').fadeToggle(1000);
    $('#line').toggleClass('new');
})

let nav_bar = document.querySelector('#nav_bar');
window.addEventListener('scroll',function(){
    let scrollY = window.scrollY;
    if(scrollY > 150){
        nav_bar.classList.add('hide');
    }
    else{
        nav_bar.classList.remove('hide');
    }
    if(scrollY > 400){
        nav_bar.classList.add('show');
    }
    else{
        nav_bar.classList.remove('show');
    }
})