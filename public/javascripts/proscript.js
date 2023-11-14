var tl = gsap.timeline();

tl.to("#nav h1",{
    scale:1,
    duration:1,
    margin:"1em",
    scrollTrigger:{
        start: "top -2%",
        end: "top -10%",
        scrub: 2,
    }
})


tl.from("#hero",{
    y: "50%",
    duration:1.5,
    ease: "power4.out"
})