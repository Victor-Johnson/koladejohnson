import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

const ProjectsMasonry = dynamic( () => import("@components/ProjectsMasonry"), { ssr: false } );

import { getSortedProjectsData } from "@library/projects";

export const metadata = {
  title: {
		default: "Projects",
	},
  description: AppData.settings.siteDescription,
}

async function Projects() {
  const projects = await getAllProjects();

  const heading = {
    "title": "Portfolio",
    "subtitle": "What sets me apart is not just my <span class='mil-accent'>technical expertise</span> but also my commitment to sharing great ideas."
  }

  return (
    <>
      <div className="mil-content-frame" id="page">
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsMasonry projects={projects} heading={heading} categories={AppData.projects.categories} />
        </Suspense>
      </div>
    </>
  );
};
export default Projects;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}