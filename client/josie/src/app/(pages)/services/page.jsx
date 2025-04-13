import React from "react";

import AppData from "@data/app.json";

import ServicesSection from "@components/sections/Services";

export const metadata = {
  title: {
		default: "Services",
	},
  description: AppData.settings.siteDescription,
}

async function ServicesPage() {
  return (
    <>
      <div className="mil-content-frame" id="page">
        <ServicesSection />
      </div>
    </>
  );
};
export default ServicesPage;