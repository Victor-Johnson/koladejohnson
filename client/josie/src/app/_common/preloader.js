import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export const preloaderAnimation = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    /* -------------------------------------------

    preloader

    ------------------------------------------- */
    const preloaderTimeline = gsap.timeline();

    let curtainWidth;

    if (window.innerWidth < 992) {
        curtainWidth = '0';
    } else if (window.innerWidth < 1200) {
        curtainWidth = '30%';
    } else {
        curtainWidth = '35%';
    }

    preloaderTimeline
        .to(".mil-preloader .mil-curtain", {
            width: curtainWidth,
            ease: "sine",
            duration: 0.4,
            delay: 0.2,
            onComplete: function () {
                ScrollTrigger.refresh();
            },
        })
        .to(".mil-preloader .mil-load", {
            width: '100%',
            ease: "sine",
            duration: 1,
            onComplete: function () {
                ScrollTrigger.refresh();
            },
        })
        .to(".mil-preloader", {
            opacity: 0,
            ease: "sine",
            duration: 0.4,
            delay: 0.2,
            onComplete: function () {
                ScrollTrigger.refresh();
            },
        });
}