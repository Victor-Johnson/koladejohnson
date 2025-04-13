"use client";

import { useEffect } from "react";
import { preloaderAnimation } from "@common/preloader";

const PreloaderLayout = ( { status = 0 } ) => {
    useEffect(() => {
        if ( status ) {
            preloaderAnimation();
        }
    }, []);

    return (
        <>
            {status == 1 &&
            <div className="mil-preloader">
                <div className="mil-h1 mil-fs24">Loading<span className="mil-accent">...</span></div>
                <div className="mil-curtain"></div>
                <div className="mil-load"></div>
            </div>
            }
        </>
    );
};
export default PreloaderLayout;