"use client";

import Data from "@data/sliders/latest-projects.json";
import Link from "next/link";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const LatestProjectsSlider = ( { heading, projects } ) => {
    return (
        <>
            {/* portfolio */}
            <div className="mil-container" id="portfolio">
                <div className="row">
                    <div className="col-lg-8 mil-mb90">
                        <h2 className="mil-fs24 mil-mb30 mil-up">{heading.title}</h2>
                        <p className="mil-fs18 mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                    </div>
                </div>
            </div>
            <div className="mil-container-out mil-p-0-90">
                    <Swiper
                        {...SliderProps.milPortfolioSlider}
                        className="swiper-container mil-portfolio-slider mil-up mil-c-swipe mil-c-light"
                    >
                        {projects.slice(0, Data.numOfItems).map((item, key) => (
                        <SwiperSlide className="swiper-slide" key={`latest-projects-slider-item-${key}`}>
                            <div className="mil-portfolio-item">
                                <img src={item.image} alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                <Link href={`/projects/${item.id}`} className="mil-overlay mil-c-gone">Read more</Link>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                <div className="mil-swiper-pagination mil-tac mil-up"></div>
            </div>
            {/* portfolio end */}
        </>
    );
};

export default LatestProjectsSlider;
