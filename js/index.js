/* eslint-disable no-unused-vars */
// Your code goes here
const navLinks = document.querySelector('.nav');
const introHeader = document.querySelector('.intro');
const introImage = introHeader.querySelector('img');
const home = document.querySelector('#homeLink');
const bodyPage = document.querySelector('body');
const imageContent = document.getElementsByClassName('img-content')[0];
const contentDest = document.getElementsByClassName('content-destination')[0];
const imageContnet = contentDest.querySelector('img');
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
window.addEventListener('scroll', function() {
    let elm = document.getElementById('scroll');
    if (elm == null) {
        elm = document.createElement('span');
        elm.setAttribute("id", "scroll");
        elm.style.color = 'blue';
        elm.style.fontSize = '2em';
        elm.style.position = 'absolute';
        elm.style.left = '10px';
        elm.style.top = '200px';
        document.body.prepend(elm);

    }
    elm.innerHTML = window.pageYOffset + 'px';
});

// select event
// no <input type="text"> or <textarea>
// dblclick event
imageContent.addEventListener('dblclick', (event) => {
    event.target.style.opacity = .5;
})

// drag / drop event

// contentDest.addEventListener('dragover', (event) => {
//     console.log('whatever');
// })

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    imageContnet.src = ev.srcElement.querySelector("img").src;
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

navLinks.addEventListener('click', (event) => {
    event.preventDefault();
});