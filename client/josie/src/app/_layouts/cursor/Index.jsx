"use client";

import { useEffect } from "react";
import { cursorAnimation } from "@common/cursor";

const CursorLayout = () => {
    useEffect(() => {
        cursorAnimation();
    }, []);

    return (
        <>
            <div className="mil-cursor-follower"></div>
        </>
    );
};
export default CursorLayout;