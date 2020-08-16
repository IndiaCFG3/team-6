let video = document.getElementsByTagName('video');

// let body = document.getElementsByTagName('body');
if (window.location.pathname !== '/') {
  document.getElementById('overlay').className = 'hideloader';
  document.getElementById('preloader').className = 'hideloader';
  document.getElementById('diamond').className = 'hideloader';
  document.getElementById('movement').className = 'hideloader';
}
if (window.location.pathname === '/') {
  checkforVideo();
}

let wrapp = document.getElementById('project-wrapper');
let projects = document.getElementById('projects');

wrapp.style.minHeight = projects.scrollHeight + 'px';
let done = false;
function checkforVideo() {
  //Every 500ms, check if the video element has loaded
  //eslint-disable-next-line
  var b = setInterval(() => {
    if (video[0].readyState >= 3 && done === false) {
      // body[0].style.overflow = 'visible';
      document.getElementById('overlay').className = 'hideloader';
      document.getElementById('preloader').className = 'hideloader';
      document.getElementById('diamond').className = 'hideloader';
      document.getElementById('movement').className = 'hideloader';
      console.log('done');
      done = true;
      clearInterval(b);
    }

    // document.getElementById('container').style.height = window.innerHeight;
    // document.getElementById('projects').style.height = window.innerHeight * 2;
    // document.getElementById('about').style.height = window.innerHeight;
  }, 500);
}
window.onload = function () {
  let wrapp = document.getElementById('project-wrapper');
  let projects = document.getElementById('projects');

  wrapp.style.minHeight = projects.scrollHeight + 'px';
  document.getElementById('navbar').style.top = '0rem';
  document.getElementById('ak_logo').style.top = '0rem';
};

window.addEventListener('resize', () => {
  document
    .querySelector(':root')
    .style.setProperty('--vh', window.innerHeight / 100 + 'px');
  let wrapp = document.getElementById('project-wrapper');
  let projects = document.getElementById('projects');

  wrapp.style.minHeight = projects.scrollHeight + 'px';
});

// setInterval(() => {
//   if (document.location.hash === '#projects') {
//     body[0].style.overflow = 'visible';
//   } else {
//     body[0].style.overflow = 'hidden';
//   }
// }, 10);
// window.onscroll = function () {
//   if (document.location.hash === '#projects') {
//     body[0].style.overflow = 'visible';
//   } else {
//     body[0].style.overflow = 'hidden';
//   }
// };
