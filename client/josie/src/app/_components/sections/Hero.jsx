"use client";

import Data from "@data/sections/hero.json";
import Link from "next/link";

const HeroOne = () => {

    return (
        <>
            {/* banner */}
            <div className="mil-banner mil-container-out-right">
                <div className="row mil-aic">
                    <div className="col-xl-6">
                        <div className="mil-banner-text">
                            <p className="mil-suptitle mil-fs16 mil-mb50" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h1 className="mil-fs90 mil-upper mil-mb40" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-fs16 mil-shortened mil-soft mil-mb60" dangerouslySetInnerHTML={{__html : Data.description}} />
                            <div className="mil-c-gone">
                                <Link href={Data.button.link} className="mil-btn mil-btn-border">{Data.button.label}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="mil-banner-image">
                            <img src={Data.photo.url} alt={Data.photo.alt} className="mil-scale-img" data-value-1=".73" data-value-2="1.11" />
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end */}
        </>
    );
}
export default HeroOne;