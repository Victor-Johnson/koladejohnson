'use client';

import Data from "@data/sections/skills.json";

const SkillsSection = ( { paddingTop = 90, paddingBottom = 90 } ) => {
    return (
        <>
            {/* skills */}
            <div className={`mil-container mil-p-${paddingTop}-${paddingBottom}`} id="skills">
                <div className="row">
                    <div className="col-xl-8 mil-mb90">
                        <h2 className="mil-fs24 mil-mb30 mil-up">{Data.title}</h2>
                        <p className="mil-fs18 mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                    </div>
                    <div className="col-12">
                        {Data.items.map((item, key) => (
                        <div key={`skills-item-${key}`}>
                            <p className="mil-suptitle mil-fs14 mil-mb10 mil-up">{item.label}</p>
                            <div className="mil-prog-track mil-mb60 mil-add-class mil-up">
                                <div className="mil-prog" data-number={item.value}></div>
                            </div>
                        </div>
                        ))}
                        <p className="mil-soft mil-fs16 mil-up" dangerouslySetInnerHTML={{__html : Data.info}} />
                    </div>
                </div>
            </div>
            {/* skills end */}
        </>
    );
};
export default SkillsSection;