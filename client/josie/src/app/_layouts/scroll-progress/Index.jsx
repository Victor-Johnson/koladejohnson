"use client";

import { useEffect } from "react";
import { scrollAnimation } from "@common/scrollAnims";

const ScrollProgressLayout = () => {
    useEffect(() => {
        scrollAnimation();
    }, []);
    
    return (
        <>
            <div className="mil-progress-track">
                <div className="mil-progress"></div>
            </div>
        </>
    );
};
export default ScrollProgressLayout;