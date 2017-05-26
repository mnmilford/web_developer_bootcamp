// Selecting and modifying the H1
var h1 = document.getElementsByTagName('h1')[0];
setInterval(function(){
  h1.classList.toggle('highlight');
}, 500);

// Selecting and modifying the <p> tag
var pTag = document.getElementsByTagName('p')[0];
setTimeout(function(){
  pTag.classList.add('double-font');
}, 4000);

// Selecting and modifying list elements
var ul = document.querySelector('ul');
ul.innerHTML += '<li>Roses</li>';

// Selecting and remove the first img tag after 7 seconds
// Change the second img to an entirely different image
var images = document.getElementsByTagName('img');
setTimeout(function(){
  images[0].remove(); // This removes the first image
  // Since the first image was removed, the second image is now at index 0
  images[0].setAttribute('src', 'https://img.buzzfeed.com/buzzfeed-static/static/2016-07/20/11/campaign_images/buzzfeed-prod-fastlane02/16-corgi-mixes-that-will-melt-your-cold-unloving--2-2759-1469026977-1_dblbig.jpg');
}, 7000);