import React from "react";

import AppData from "@data/app.json";

import SkillsSection from "@components/sections/Skills";

export const metadata = {
  title: {
		default: "Skills",
	},
  description: AppData.settings.siteDescription,
}

async function SkillsPage() {
  return (
    <>
      <div className="mil-content-frame" id="page">
        <SkillsSection />
      </div>
    </>
  );
};
export default SkillsPage;