import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export const scrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    /* -------------------------------------------

    scrollbar

    ------------------------------------------- */
    gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
            scrub: 0.3
        }
    });

    /* -------------------------------------------

    scroll animations

    ------------------------------------------- */
    const appearance = document.querySelectorAll(".mil-up");
    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 60,
            scale: .96,
            ease: 'sine',
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    /* -------------------------------------------

    scale animations

    ------------------------------------------- */
    const scaleImage = document.querySelectorAll(".mil-scale-img");

    scaleImage.forEach((section) => {
        var value1 = section.getAttribute("data-value-1");
        var value2 = section.getAttribute("data-value-2");

        if (window.innerWidth < 1200) {
            value1 = Math.max(.95, value1);
        }

        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,
        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    /* -------------------------------------------

    progressbar

    ------------------------------------------- */
    const progressBars = document.querySelectorAll('.mil-prog');

    progressBars.forEach(progressBar => {
        const widthPercentage = progressBar.getAttribute('data-number');
        gsap.fromTo(progressBar, {
            ease: 'sine',
            width: '0%'
        }, {
            width: `${widthPercentage}%`,
            scrollTrigger: {
                trigger: progressBar,
                toggleActions: 'play none none reverse',
                once: true
            },
            duration: 2,
            ease: 'sine'
        });
    });
}