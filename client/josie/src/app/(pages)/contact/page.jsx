import React from "react";

import AppData from "@data/app.json";

import ContactInfoSection from "@components/sections/ContactInfo";
import ContactFormSection from "@components/ContactForm";

export const metadata = {
    title: {
        default: "Contact",
    },
    description: AppData.settings.siteDescription,
}

const ContactPage = () => {
  return (
    <>
      <div className="mil-content-frame" id="page">
        
        {/* contact */}
        
        <ContactInfoSection />

        <ContactFormSection />
        
        {/* contact end */}

      </div>
    </>
  );
};
export default ContactPage;
