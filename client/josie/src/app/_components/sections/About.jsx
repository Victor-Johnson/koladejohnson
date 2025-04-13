'use client';

import Data from "@data/sections/about.json";

const AboutSection = ( { paddingTop = 90, paddingBottom = 0 } ) => {
    return (
        <>
            {/* about */}
            <div className={`mil-container mil-p-${paddingTop}-${paddingBottom}`} id="about">
                <div className="row">
                    <div className="col-lg-8 col-xl-6 mil-mb90">
                        <h2 className="mil-fs24 mil-mb30 mil-up">{Data.title}</h2>
                        <p className="mil-fs18 mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                    </div>
                </div>
            </div>
            <div className="mil-container-out">
                <div className="mil-about-banner">
                    <div className="mil-up" style={{"position": "relative", "zIndex": "2"}}>
                        <div className="mil-sign">{Data.signature}</div>
                    </div>
                    <div className="mil-image-frame mil-up">
                        <img src={Data.image.url} alt={Data.image.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                    </div>
                </div>
            </div>
            <div className="mil-container mil-p-90-90 mil-1200-p-30-90">
                <div className="row flex-sm-row-reverse">
                    {Data.list !== undefined &&
                    <div className="col-xl-6" style={{"position": "relative"}}>
                        <ul className="mil-contact-info mil-mb30 mil-up">
                            {Data.list.map((item, key) => (
                            <li key={`about-list-item-${key}`}>
                                <h6 className="mil-fs16 mil-mb10 mil-up">{item.label}</h6>
                                {item.type !== "link" &&
                                <p className="mil-fs16 mil-soft mil-up">{item.value}</p>
                                }
                                {item.type == "link" &&
                                <div className="mil-up mil-c-gone"><a href={item.link} target="_blank" className="mil-text-link mil-fs16">{item.value}</a></div>
                                }
                            </li>
                            ))}
                        </ul>
                    </div>
                    }
                    {Data.description1 !== undefined &&
                    <div className="col-xl-6">
                        <p className="mil-soft mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.description1}} />
                    </div>
                    }
                </div>
                <div className="row">
                    {Data.description2 !== undefined &&
                    <div className="col-lg-6">
                        <p className="mil-soft mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.description2}} />
                    </div>
                    }
                    {Data.description3 !== undefined &&
                    <div className="col-lg-6">
                        <p className="mil-soft mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.description3}} />
                    </div>
                    }
                    {Data.description4 !== undefined &&
                    <div className="col-lg-12">
                        <p className="mil-soft mil-fs16 mil-up" dangerouslySetInnerHTML={{__html : Data.description4}} />
                    </div>
                    }
                </div>
            </div>
            {/* about end */}
        </>
    );
};
export default AboutSection;