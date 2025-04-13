"use client";

import Data from "@data/sliders/latest-posts.json";
import Date from '@library/date';
import Link from "next/link";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const LatestPostsSlider = ( { heading, posts } ) => {    
    return (
        <>
            {/* blog */}
            <div className="mil-container mil-p-0-90" id="blog">
                <div className="row">
                    <div className="col-lg-8 col-xl-6 mil-mb90">
                        <h2 className="mil-fs24 mil-mb30 mil-up">{heading.title}</h2>
                        <p className="mil-fs18 mil-up" dangerouslySetInnerHTML={{__html : heading.subtitle}} />
                    </div>
                    <div className="col-12">
                        <Swiper
                            {...SliderProps.milBlogSlider}
                            className="swiper-container mil-blog-slider mil-up"
                            style={{"overflow": "hidden"}}
                        >   
                                {posts.slice(0, Data.numOfItems).map((item, key) => (
                                <SwiperSlide className="swiper-slide" key={`latest-posts-slider-item-${key}`}>
                                    <div className="mil-blog-item">
                                        <div className="mil-pub-cover mil-c-swipe mil-c-light">
                                            <img src={item.image} alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                                            <Link href={`/blog/${item.id}`} className="mil-overlay mil-c-gone">Read more</Link>
                                        </div>
                                        <div className="mil-descr">
                                            <div className="mil-left">
                                                <h3 className="mil-fs20 mil-mb10 mil-up mil-c-gone"><Link href={`/blog/${item.id}`} className="mil-c-gone">{item.title}</Link></h3>
                                                <ul className="mil-pub-info mil-up">
                                                    <li><Link href={`/blog/${item.id}`} className="mil-c-gone">{item.categories[0]}</Link></li>
                                                    <li><Date dateString={item.date} /></li>
                                                </ul>
                                            </div>
                                            <div className="mil-right">
                                                <p className="mil-soft mil-fs16 mil-up">{item.short}</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                </SwiperSlide>
                                ))}
                        </Swiper>
                        <div className="mil-swiper-pagination-2 mil-tac mil-up"></div>
                    </div>
                </div>
            </div>
            {/* blog end */}
        </>
    );
};

export default LatestPostsSlider;
