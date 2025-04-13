import React from "react";

import AppData from "@data/app.json";

import AboutSection from "@components/sections/About";

export const metadata = {
  title: {
		default: "About",
	},
  description: AppData.settings.siteDescription,
}

async function AboutPage() {
  return (
    <>
      <div className="mil-content-frame" id="page">
        <AboutSection />
      </div>
    </>
  );
};
export default AboutPage;