const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i < 6; i += 1) {

    const newImage = document.createElement('img');

    let path = `images/pic${i}.jpg`;

    // console.log(path);
    
    newImage.setAttribute('src', path);
    thumbBar.appendChild(newImage);

    // Add an onclick handler to each thumbnail image
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src;
    }
}
    
/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    let currentState = btn.getAttribute('class');

    if (currentState === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}


