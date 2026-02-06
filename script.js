// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

//////////////////////////////////////////////////
// HERO INTRO ANIMATION
//////////////////////////////////////////////////
gsap.from("#logo", {
    duration: 1.5,
    y: -80,
    opacity: 0,
    ease: "power4.out"
});

gsap.from("#subtitle", {
    duration: 1.5,
    y: 40,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from(".btn", {
    duration: 1.2,
    scale: 0.8,
    opacity: 0,
    delay: 1,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

//////////////////////////////////////////////////
// SCROLL REVEAL SECTIONS
//////////////////////////////////////////////////
gsap.utils.toArray(".section").forEach(section => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleClass: "revealed"
        }
    });
});

//////////////////////////////////////////////////
// PARALLAX EFFECT
//////////////////////////////////////////////////
gsap.to("#about", {
    backgroundPosition: "50% 30%",
    ease: "none",
    scrollTrigger: {
        trigger: "#about",
        scrub: true
    }
});

//////////////////////////////////////////////////
// DISH CARDS ANIMATION
//////////////////////////////////////////////////
gsap.from(".dish-card", {
    scrollTrigger: {
        trigger: "#dishes",
        start: "top 75%"
    },
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

//////////////////////////////////////////////////
// GALLERY IMAGES ANIMATION
//////////////////////////////////////////////////
gsap.from("#experience img", {
    scrollTrigger: {
        trigger: "#experience",
        start: "top 75%"
    },
    scale: 0.85,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power2.out"
});

//////////////////////////////////////////////////
// LIGHTBOX EFFECT
//////////////////////////////////////////////////
const galleryImages = document.querySelectorAll('#experience img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        gsap.fromTo(lightboxImg, {scale: 0.8, opacity: 0}, {scale: 1, opacity: 1, duration: 0.5});
    });
});

closeBtn.addEventListener('click', () => {
    gsap.to(lightboxImg, {scale: 0.8, opacity: 0, duration: 0.3, onComplete: () => {
        lightbox.style.display = 'none';
    }});
});

//////////////////////////////////////////////////
// RESERVATION FORM POP
//////////////////////////////////////////////////
gsap.from("#reservation-form", {
    scrollTrigger: {
        trigger: "#reservation",
        start: "top 75%"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});

//////////////////////////////////////////////////
// GOLDEN PARTICLES (MORE LUXURY FEEL)
//////////////////////////////////////////////////
const particlesContainer = document.getElementById("particles");

for (let i = 0; i < 25; i++) {
    let particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.background = "#D4AF37";
    particle.style.borderRadius = "50%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.opacity = Math.random();

    gsap.to(particle, {
        y: "-=200",
        x: "+=" + (Math.random() * 100 - 50),
        duration: 5 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    particlesContainer.appendChild(particle);
}
