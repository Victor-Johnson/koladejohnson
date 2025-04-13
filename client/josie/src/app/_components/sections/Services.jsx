import Data from "@data/sections/services.json";
import Link from "next/link";

const ServicesSection = ( { paddingTop = 90, paddingBottom = 30 } ) => {
  return (
    <>
        {/* services */}
        <div className={`mil-container mil-p-${paddingTop}-${paddingBottom}`} id="services">
            <div className="row">
                <div className="col-lg-8 mil-mb90">
                    <h2 className="mil-fs24 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                    <p className="mil-fs18 mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                </div>
                <div className="col-12">
                    {Data.items.map((item, key) => (
                    <div key={`services-item-${key}`}>
                        <div className="mil-service-item mil-mb60">
                            <div className="mil-icon-part mil-mb30">
                                <img src={item.icon} alt="icon" className="mil-up" />
                                <h3 className="mil-fs20 mil-up">{item.title}</h3>
                            </div>
                            <div className="mil-text-part">
                                <p className="mil-fs16 mil-soft mil-mb30 mil-up">{item.text}</p>
                                {item.list !== undefined &&
                                <ul className="mil-fs16">
                                    {item.list.map((list_item, list_key) => (
                                    <li className="mil-up" key={`services-item-${key}-list-${list_key}`}>{list_item}</li>
                                    ))}
                                </ul>
                                }
                            </div>
                        </div>
                        {Data.items.length - 1 !== key &&
                        <div className="mil-divider mil-mb60 mil-up"></div>
                        }
                    </div>
                    ))}
                </div>
            </div>
        </div>
        {/* services end */}
    </>
  );
};

export default ServicesSection;