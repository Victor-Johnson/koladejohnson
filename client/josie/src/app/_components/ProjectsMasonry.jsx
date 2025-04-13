"use client";

import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import layoutMode from "isotope-layout/js/layout-mode";

import { cursorAnimation } from "@common/cursor";
import { scrollAnimation } from "@common/scrollAnims";

const ProjectsMasonry = ({ projects, heading, categories, layout = 'masonry', columns = 2 }) => {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    
    useEffect(() => {
        //setTimeout(() => {
            isotope.current = new Isotope(".mil-grid", {
                itemSelector: ".mil-grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: '.mil-grid-item'
                },
                transitionDuration: '.6s',
                layoutMode: "fitRows"
            });
        //}, 500);
    }, []);

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    
    const handleFilterKeyChange = (key, e) => {
        e.preventDefault();
        setFilterKey(key);
        const filterLinks = document.querySelectorAll(".mil-filter a");
        filterLinks.forEach((filter) => {
            const filterValue = filter.getAttribute("data-filter");
            if (filterValue == key) {
                filter.classList.add("mil-active");
            } else {
                filter.classList.remove("mil-active");
            }
        });
    };

    useEffect(() => {
        cursorAnimation();
        scrollAnimation();
    }, []);

    return (
        <div className="mil-container mil-p-90-90" id="portfolio">
            <div className="row">
                <div className="col-lg-8 mil-mb90">
                    <h2 className="mil-fs24 mil-mb30 mil-up">{heading.title}</h2>
                    <p className="mil-fs18 mil-up" dangerouslySetInnerHTML={{__html : heading.subtitle}} />
                </div>
                <div className="col-12">
                    <ul className="mil-filter mil-mb60 mil-up">
                        <li><a href="#." onClick={ (e) => handleFilterKeyChange("*", e)} className="mil-active">All</a></li>
                        {categories.map((item, key) => (
                        <li key={`projects-filter-item-${key}`}><a href="#." data-filter={`${item.slug}`} onClick={(e) => handleFilterKeyChange(item.slug, e)}>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row mil-grid">
                {projects.map((item, key) => (
                <div className={`mil-grid-item ${item.category_slug} col-lg-${item.masonrySize == 'horizontal' ? '12' : '6'}`} key={`projects-item-${key}`}>
                    <Link href={`/projects/${item.id}`} className={layout == "masonry" ? `mil-portfolio-item mil-mb30 mil-up mil-c-view mil-c-light mil-${item.masonrySize == 'horizontal' ? 'long' : item.masonrySize}` : `mil-portfolio-item mil-mb30 mil-up mil-c-view mil-c-light mil-square`}>
                        <img src={item.image} alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                    </Link>
                </div>
                ))}
            </div>
        </div>
    );
};
export default ProjectsMasonry;
  