mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } 
    else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function addShadow(element) {
    element.classList.add("shadow");
}

function removeShadow(element) {
    element.classList.remove("shadow");
}

let bar1 = document.querySelector('#bar1');
let bar2 = document.querySelector('#bar2');
let bar3 = document.querySelector('#bar3');
let bar4 = document.querySelector('#bar4');

bar1.addEventListener('click', () =>{
    document.querySelector(".float").style.backgroundImage = "url('images/feature1.jpg')";
    document.querySelector("#bar1").style.backgroundColor = 'white';
    document.querySelector("#bar2, #bar3, #bar4").style.backgroundColor = 'goldenrod';
});

bar2.addEventListener('click', () =>{
    document.querySelector(".float").style.backgroundImage = "url('images/feature2.jpg')";
    document.querySelector("#bar2").style.backgroundColor = 'white';
    document.querySelector("#bar1, #bar3, #bar4").style.backgroundColor = 'goldenrod';
});

bar3.addEventListener('click', () =>{
    document.querySelector(".float").style.backgroundImage = "url('images/feature3.webp')";
    document.querySelector("#bar3").style.backgroundColor = 'white';
    document.querySelector("#bar1, #bar2, #bar4").style.backgroundColor = 'goldenrod';
});

bar4.addEventListener('click', () =>{
    document.querySelector(".float").style.backgroundImage = "url('images/feature4.jpg')";
    document.querySelector("#bar4").style.backgroundColor = 'white';
    document.querySelector("#bar1, #bar2, #bar3").style.backgroundColor = 'goldenrod';
});

function remove() {
    document.querySelector(".cookie").remove();
}