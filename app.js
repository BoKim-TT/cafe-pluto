document.querySelector('.namu').addEventListener('click', function () {
  document.querySelector('main').style.backgroundImage =
    "url('https://www.transparenttextures.com/patterns/cubes.png')";
  // $("body").style.backgroundImage =
  document.body.style.backgroundImage =
    "url('https://www.transparenttextures.com/patterns/3px-tile.png')";
});

// document.querySelector('.navbar-brand').onClick = () => {
//   document.querySelector('.carousel').scrollIntoView();
// };

//jquery;
$('.navbar-brand').click(function () {
  $('#food').scrollIntoView();
  // $('.left').fadeIn(300).fadeOut(300).fadeIn(300);
});

var audio = new Audio('./audio/bensound-thejazzpiano.mp3');

$('.musicOn').on('click', function () {
  audio.play();
});
$('.musicOff').on('click', function () {
  audio.pause();
});
