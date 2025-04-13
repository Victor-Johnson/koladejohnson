import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroSection from "@components/sections/Hero";
import ServicesSection from "@components/sections/Services";
import AboutSection from "@components/sections/About";
import SkillsSection from "@components/sections/Skills";
import ExperienceSection from "@components/sections/Experience";
import ContactInfoSection from "@components/sections/ContactInfo";
import ContactFormSection from "@components/ContactForm";

const LatestPostsSlider = dynamic( () => import("@components/sliders/LatestPosts"), { ssr: true } );
const LatestProjectsSlider = dynamic( () => import("@components/sliders/LatestProjects"), { ssr: true } );

export const metadata = {
  title: {
		default: "Home Onepage",
	},
  description: AppData.settings.siteDescription,
}

async function HomeOnePage() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <>
       <div className="mil-content-frame" id="home">

        <HeroSection />
        <ServicesSection paddingTop={0} />
        <AboutSection paddingTop={0} />

        <Suspense fallback={<div>Loading...</div>}>
          <LatestProjectsSlider heading={{"title": "Portfolio", "subtitle": "What sets me apart is not just my <span class='mil-accent'>technical expertise</span> but also my commitment to sharing great ideas."}} projects={projects} />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <LatestPostsSlider heading={{"title": "Blog", "subtitle": "My academic pursuit led me to <span class='mil-accent'>New York University</span> (NYU), where I delved into the world of arts and letters."}} posts={posts} />
        </Suspense>

        <SkillsSection paddingTop={0} />

        <ExperienceSection />
        
        <ContactInfoSection paddingTop={0} />
        <ContactFormSection />

      </div>
    </>
  );
};
export default HomeOnePage;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}