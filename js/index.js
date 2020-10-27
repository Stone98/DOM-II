/* eslint-disable no-unused-vars */
// Your code goes here
const navLinks = document.querySelector('.nav');
const introHeader = document.querySelector('.intro');
const introImage = introHeader.querySelector('img');
const home = document.querySelector('#homeLink');
const bodyPage = document.querySelector('body');
const imageContent = document.getElementsByClassName('img-content');

// mouseover event
navLinks.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
})

// keydown event
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        event.target.style.color = 'red';
    }
})

// wheel event
let scale = 1;
introImage.addEventListener('wheel', (event) => {
    event.preventDefault();
    // max scale 1.5 min scale .5
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.5, scale), 1.5);
    introImage.style.transform = `scale(${scale})`;
})

// load event
window.addEventListener('load', (event) => {
    document.body.style.backgroundColor = 'rgb(230, 230, 230)';
});

// focus event
home.addEventListener('focus', (event) => {
    if (event.target != null) {
        console.log(event.target);
        event.target.style.border = '.1em solid red';
    }

})

// resize event
window.addEventListener('resize', (event) => {
    let elm = document.getElementById('windowWidth');
    if (elm == null) {
        elm = document.createElement('span');
        elm.setAttribute("id", "windowWidth");
        elm.style.color = 'red';
        elm.style.fontSize = '2em';
        document.body.appendChild(elm);
    }
    elm.innerHTML = window.innerWidth + ',' + window.innerHeight;
})

// scroll event
// bodyPage.addEventListener('scroll', (event) => {

// })

// select event

// dblclick event
imageContent.addEventListener('dblclick', (event) => {
    event.target.style.transform = '1.3em';
})

// drag / drop event