import React from "react";

import AppData from "@data/app.json";

import HeroSection from "@components/sections/Hero";

export const metadata = {
  title: {
		default: "Home",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function HomePage() {
  return (
    <>
      <div className="mil-content-frame" id="home">
        <HeroSection />
      </div>
    </>
  );
};
export default HomePage;