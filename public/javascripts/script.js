gsap.registerPlugin(CustomEase);
function loaderAnim() {
    let a = 0;
    let interval = setInterval(() => {
        a -= 100;
        gsap.to("#intro span",{
            y: a + "%",
            duration:1,
            ease: "elastic.out(1,0.3)",
        })
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        gsap.to("#center",{
            height: "700vh",
            width: "700vh",
            duration: 4,
            ease:CustomEase.create("custom", "M0,0 C0.007,0.053 0.018,0.111 0.032,0.155 0.071,0.287 0.096,0.371 0.124,0.457 0.127,0.467 0.102,0.477 0.105,0.487 0.166,0.678 0.211,0.765 0.255,0.8 0.29,0.827 0.313,0.843 0.387,0.882 0.427,0.903 0.483,0.911 0.565,0.933 0.665,0.961 0.803,1 1,1 "),
        })
        gsap.to("#center",{
            opacity: 0,
            display: "none",
            duration: 1,
            delay: 0.3,
            ease:CustomEase.create("custom", "M0,0 C0.007,0.053 0.018,0.111 0.032,0.155 0.071,0.287 0.096,0.371 0.124,0.457 0.127,0.467 0.102,0.477 0.105,0.487 0.166,0.678 0.211,0.765 0.255,0.8 0.29,0.827 0.313,0.843 0.387,0.882 0.427,0.903 0.483,0.911 0.565,0.933 0.665,0.961 0.803,1 1,1 "),
        })
        gsap.to("#loader",{
            display: "none",
            delay:-0.2,
            duration:0.5,
            ease:"power4.out"
        })
    }, 300);
}

function nameAnim() {
    setInterval(() => {
        gsap.to([".a",".h",".t"],{
            y: "-100%",
            duration:0.5,
            ease: "power4.out"
        })
        gsap.to([".a",".h",".t"],{
            y: "0%",
            delay:1,
            duration:0.5,
            ease: "power4.out"
        })
        gsap.to([".i",".u",".s"],{
            y: "-100%",
            delay:1,
            duration:0.5,
            ease: "power4.out"
        })
        gsap.to([".u",".i",".s"],{
            y: "0%",
            delay:2,
            duration:0.5,
            ease: "power4.out"
        })
    }, 4000);


    var letters = document.querySelectorAll(".letter");
    letters.forEach((letter)=>{
        letter.addEventListener("mouseenter",function(){
            gsap.to(this,{
                y:"-100%",
                duration:0.3,
                ease: "power4.out"
            })
        })
        letter.addEventListener("mouseleave",function(){
            gsap.to(this,{
                y:"00%",
                duration:0.3,
                ease: "power4.out"
            })
        })
    })

}

loaderAnim();
nameAnim();