function handleMouseEvents(element, index) {
    element.addEventListener("mouseenter", () => {
        isAnimationPaused[index] = true;
    });

    element.addEventListener("mouseleave", () => {
        isAnimationPaused[index] = false;
    });
}

function animate() {
    const currentTime = performance.now();

    planetData.forEach((data, index) => {
        const pauseAnimation = isAnimationPaused[index];
        if (!pauseAnimation) {
            const angle = currentTime * data.speed / 10;
            const x = data.radiusX * Math.cos(angle);
            const y = data.radiusY * Math.sin(angle);

            planet[index].style.left = `${sun.offsetLeft + x + 19}px`;
            planet[index].style.top = `${sun.offsetTop + y + 20}px`;
        }
    });

    requestAnimationFrame(animate);
}

function pinAction(element, index) {
    element.addEventListener("mouseenter", () => {
        flag = false;
        gsap.to(pin[index], {
            display: "flex",
            opacity: 1,
            y: "-4.2em",
            x: "-55%",
            duration: 0.3,
            rotate: 0,
        });
    });

    element.addEventListener("mouseleave", () => {
        flag = true;
        gsap.to(pin[index], {
            opacity: 0,
            display: "none",
            delay: 0,
            y: "-2em",
            x: "30%",
            rotate: 90,
        });
    });
}

const sun = document.querySelector("#sun");
const planet = document.querySelectorAll(".planet");
const pin = document.querySelectorAll(".planetinfo");
const skillbtns = document.querySelectorAll(".skill");
const isAnimationPaused = new Array(planet.length).fill(false);


let flag = true;

function axisRotation() {
    const planetData = [
        { radiusX: 77, radiusY: 30, speed: 0.01 },
        { radiusX: 127, radiusY: 55, speed:0.0045},
        { radiusX: 177, radiusY: 75, speed:0.0055},
        { radiusX: 235, radiusY: 97, speed:0.0040},
        { radiusX: 298, radiusY: 125, speed:0.0035},
        { radiusX: 365, radiusY: 150, speed:0.0028},
        { radiusX: 435, radiusY: 175, speed:0.0020},
        { radiusX: 510, radiusY: 210, speed:0.0015},
        { radiusX: 590, radiusY: 243, speed:0.0012}
        // Add more planets with different orbit radii and adjustments
    ];

    planet.forEach((elem, index) => {
        handleMouseEvents(elem,index)
    });
    skillbtns.forEach((elem, index) => {
        handleMouseEvents(elem,index)
    });

    function animate() {
        const currentTime = performance.now();

        planetData.forEach((data, index) => {
            if (!isAnimationPaused[index]) {
                const angle = currentTime * data.speed / 10;
                const x = data.radiusX * Math.cos(angle);
                const y = data.radiusY * Math.sin(angle);

                planet[index].style.left = `${sun.offsetLeft + x + 19}px`;
                planet[index].style.top = `${sun.offsetTop + y + 20}px`;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}

function skillLoader() {
    var tl = gsap.timeline();
    tl.from("#solar-system", {
        scale: 0,
        duration: 1,
        ease: "power2.out"
    });
    tl.from("#sun", {
        opacity: 0,
        duration: 0.5,
    });
    tl.from(".planet", {
        opacity: 0,
        duration: 0.5,
        ease: "none"
    });
}

function pinUp() {
    planet.forEach(pinAction);
    skillbtns.forEach(pinAction);
}

axisRotation();
skillLoader();
pinUp();
