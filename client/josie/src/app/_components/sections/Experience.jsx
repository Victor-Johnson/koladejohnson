import Data from "@data/sections/experience.json";

const ExperienceSection = () => {
    return (
        <>
            {/* experience */}
            <div className="mil-container mil-p-0-30">
                <div className="row">
                    <div className="col-xl-8 mil-mb60">
                        <h2 className="mil-fs24 mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                    </div>
                    {Data.items.map((item, key) => (
                    <div className="col-md-6" key={`exp-item-${key}`}>
                        <div className="mil-exp-item mil-mb60">
                            <div className="mil-date mil-up">
                                <span className="mil-soft">{item.start}</span> - <span className="mil-accent">{item.end}</span>
                            </div>
                            <div>
                                <h6 className="mil-fs16 mil-mb10 mil-up">{item.title}</h6>
                                <p className="mil-fs16 mil-soft mil-up">{item.subtitle}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* experience end */}
        </>
    );
};

export default ExperienceSection;