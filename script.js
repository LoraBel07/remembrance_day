
gsap.to(".soldier", {x: 700, y: -300, delay: 2, duration: 3, scale: 1.6, opacity: .6})
gsap.to(".soldier", {x: 1000, y: -600, delay: 5, duration: 3, scale: 3, opacity:0})

gsap.to(".expltwo", {x: 200, y: -450, delay: 5.5, duration: .5, scale: 3, opacity: .3})
gsap.to(".expltwo", {delay: 6, duration: .5, scale: 8, opacity: 0})

gsap.to(".soldiertwo", {x: -50, y: -300, delay: 4, duration: 3, rotation: 10, opacity: .6})
gsap.to(".soldiertwo", {x: 790, y: -400, delay: 7, duration: 4, scale: 1.2, rotation: 25, opacity: 0})

gsap.to(".soldierthree", {x: 400, y: -380, delay: 8, duration: 4, scale: 3.5, rotation: 8, opacity: .6})
gsap.to(".soldierthree", {x: -700, y: -500, delay: 12.5, duration: 6, scale: 6.5, rotation: -14, opacity: 0})

gsap.to(".explone", {x: -250, y: -500, delay: 12.7, duration: .6, opacity: .6})
gsap.to(".explone", {delay: 13.3, duration: .5, scale: 6, opacity: 0})

gsap.to(".expltwo", {x: -50, y: -480, delay: 16.5, duration: .3, scale: 3, opacity: .3})
gsap.to(".expltwo", {delay: 16.8, duration: .5, scale: 9, opacity: 0})

gsap.to(".soldierfour", {x: -30, y: -370, delay: 14, duration: 3, scale: 3, opacity: .6})
gsap.to(".soldierfour", {y: -500, delay: 17, duration: 3, scale: 6, opacity: 0})

gsap.to(".soldierfive", {x: -80, y: -350, delay: 18, duration: 3, scale: 2, opacity: .6})
gsap.to(".soldierfive", {x: -600, y: -450, delay: 21, duration: 3, scale: 5, opacity: 0})

gsap.to(".expltwo", {x: 200, y: -500, delay: 21.5, duration: .5, scale: 3, opacity: .3})
gsap.to(".expltwo", {delay: 22, duration: .5, scale: 8, opacity: 0})

const flovers = document.querySelector("#section_flovers");

flovers.addEventListener("mouseover", startAnimation);

function startAnimation() {
    let move = 40;
    gsap.to(".box", {duration: 2, delay: 1.5, scale: 5.5, stagger: .3, repeat: 2, y: function(i) {
    if (i%2 === 1) return move
    else return -move
} })

}



// gsap.to(".box", {duration: 1, delay: 1, scale: 2, stagger: 1})

// gsap.from(".one", {x:300, y:100, scale: 1.5, opacity:.5})
// gsap.to(".one", {x:300, y:100, delay: 1, scale: 1.5})
// gsap.to(".two", {x:400, y:100, scale: 1.5})
// gsap.to(".three", {x:500, y:150, scale: 1.5})
// gsap.to(".one", {x:600, y:170, scale: 1.5})
// gsap.to(".two", {x:700, y:140, scale: 1.5})

