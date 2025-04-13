import Data from "@data/sections/contact-info.json";

const ContactInfoSection = ( paddingTop = 90, paddingBottom = 0 ) => {
  return (
    <>
        <div className={`mil-container mil-p-${paddingTop}-${paddingBottom}`} id="contact">
            <div className="row">
                <div className="col-xl-8 mil-mb60">
                    <h2 className="mil-fs24 mil-mb30 mil-up">{Data.title}</h2>
                    <p className="mil-fs18 mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                </div>
            </div>
            <div className="mil-divider mil-mb60 mil-up"></div>
            <div className="row mil-mb30">
                {Data.items.map((item, key) => (
                <div className="col-md-4 mil-mb60" key={`contact-info-item-${key}-info-${key}`}>
                    <h6 className="mil-fs16 mil-mb10 mil-up">{item.label}</h6>
                    <p className="mil-fs16 mil-soft mil-up">{item.value}</p>
                </div>
                ))}
            </div>
        </div>
        <div className="mil-container-out">
            <div className="mil-about-banner">
                <div className="mil-image-frame mil-up">
                    <img src={Data.image.url} alt={Data.image.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                </div>
            </div>
        </div>
    </>
  );
};

export default ContactInfoSection;