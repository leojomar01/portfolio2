// switch event listener
$('.menu').click(function (e) { 
    $('.menuItems').toggleClass('active'); 
    $(this).toggleClass('active'); 
});

$('.darkMode').click(function(){
  $(this).toggleClass('active');

  if($(this).hasClass('active')){
    //darkmode
    $(":root").css({
      '--bg': '#494949',
      '--font': '#e9e9e9',
      '--navfont': '#494949',
      '--navfonthover': '#747474',
      '--nav': '#e9e9e9',
      '--bg2': '#2e2e2e'
    });
  }
  else{
    $(":root").css({
      '--bg': '#ffffff',
      '--font': '#000000',
      '--navfont': '#ffffff',
      '--navfonthover': '#bdbdbd',
      '--nav': '#494949',
      '--bg2':'#e9e9e9'
    });
  }
})

// Navbar auto hide/show
var prevScrollpos = window.pageYOffset;
$(document).scroll(function () { 
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('nav').css('top',"0")
  } else {
    $('nav').css('top',"-12vh")
  }
  $('.menuItems').removeClass('active');  
  $('.menu').removeClass('active');  
  selectActive();
  prevScrollpos = currentScrollPos;
});

// skills
$('.skill .1').text('Basic')
$('.skill .2').text('Intermediate')
$('.skill .3').text('Advanced')
$('.skill .4').text('Expert')



let sections = document.querySelectorAll('.section');
let links = document.querySelectorAll('.menuItems li a');

function selectActive(){
  let scrollY = window.pageYOffset;
  sections.forEach((section,i) =>{
    let height = section.offsetHeight
    let top = section.offsetTop - 200
      if(scrollY > top && scrollY <=top + height){
        section.classList.add('active')
        links[i].classList.add('active-link')
      }
      else{
        links[i].classList.remove('active-link')
      }
  })
}



