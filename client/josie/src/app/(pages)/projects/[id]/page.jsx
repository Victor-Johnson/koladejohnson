import React from "react";
import { notFound } from 'next/navigation';

import { getSortedProjectsData, getAllProjectsIds, getProjectData } from "@library/projects";

import Link from "next/link";

export async function generateMetadata({ params }) {
  const postData = await getSingleProjectData(params);
  
  return {
      title: postData.title + " | Projects",
  }
}

async function ProjectDetail ( { params } ) {
  const postData = await getSingleProjectData(params);
  const projects = await getAllProjects();

  //prev next navigation
  let prev = { "id": 0, "key": 0 }
  let next = { "id": 0, "key": 0 }
  let first = { "id": 0 }
  let last = { "id": 0 }

  projects.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  })

  projects.forEach(function(item, key){
    if ( key == prev.key ) { prev.id = item.id; }
    if ( key == next.key ) { next.id = item.id; }
    if ( key == 0 ) { first.id = item.id; }
    if ( key == projects.length-1 ) { last.id = item.id; }
  });

  if ( prev.key == -1 ) { prev.id = last.id; }
  if ( next.key == projects.length ) { next.id = first.id; }

  return (
    <>
      <div className="mil-content-frame" id="page">
        {/* project */}
        <div className="mil-container mil-p-90-0" id="contact">
            <div className="row">
                <div className="col-xl-8 mil-mb60">
                    <h2 className="mil-fs24 mil-mb30 mil-up">{postData.title}</h2>
                    <p className="mil-fs18 mil-up" dangerouslySetInnerHTML={{__html : postData.short}} />
                </div>
            </div>
            <div className="mil-divider mil-mb60 mil-up"></div>
            {postData.info !== undefined &&
            <div className="row mil-mb30">
                {postData.info.map((item, key) => (
                <div className="col-md-4 mil-mb60" key={`project-info-item-${key}`}>
                    <h6 className="mil-fs16 mil-mb10 mil-up">{item.label}</h6>
                    <p className="mil-fs16 mil-soft mil-up" dangerouslySetInnerHTML={{__html: item.value}} />
                </div>
                ))}
            </div>
            }
        </div>
        {postData.fullImage !== undefined &&
        <div className="mil-container-out">
            <div className="mil-about-banner">
                <div className="mil-image-frame mil-up">
                    <img src={postData.fullImage.url} alt={postData.fullImage.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                </div>
            </div>
        </div>
        }
        {postData.description !== undefined &&
        <div className="mil-container mil-p-90-60">
            <div className="row">
                <div className="col-12">
                    <h3 className="mil-fs20 mil-mb30 mil-up">{postData.description.title}</h3>
                </div>
                {postData.description.cols == 2 ? (
                <>
                  <div className="mil-text col-lg-6 mil-soft mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html: postData.description.content}} />
                  <div className="mil-text col-lg-6 mil-soft mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html: postData.description.content2}} />
                </>
                ) : (
                <div className="col-lg-12">
                    <div className="mil-text col-lg-12 mil-soft mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html: postData.description.content}} />
                </div>
                )}
            </div>
        </div>
        }
        {postData.fullImage2 !== undefined &&
        <div className="mil-container-out">
            <div className="mil-about-banner">
                <div className="mil-image-frame mil-up">
                    <img src={postData.fullImage2.url} alt={postData.fullImage2.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                </div>
            </div>
        </div>
        }
        <div className="mil-container mil-p-90-90">
            {postData.description2 !== undefined &&
            <div className="row">
              <div className="col-12">
                  <h3 className="mil-fs20 mil-mb30 mil-up">{postData.description.title}</h3>
              </div>
              {postData.description2.cols == 2 ? (
              <>
                <div className="mil-text col-lg-6 mil-soft mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html: postData.description2.content}} />
                <div className="mil-text col-lg-6 mil-soft mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html: postData.description2.content2}} />
              </>
              ) : (
              <div className="col-lg-12">
                  <div className="mil-text col-lg-12 mil-soft mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html: postData.description2.content}} />
              </div>
              )}
            </div>
            }

            <div className="mil-pagination mil-up mil-c-gone">
              {prev.id != 0 &&
              <Link href={`/projects/${prev.id}`} className="mil-pag-arrow mil-prev">←</Link>
              }
              <Link href="/projects" className="mil-all">All projects</Link>
              {next.id != 0 &&
              <Link href={`/projects/${next.id}`} className="mil-pag-arrow mil-next">←</Link>
              }
            </div>
        </div>
        {/* project end */}
      </div>
    </>
  );
};
export default ProjectDetail;

export async function generateStaticParams() {
  const paths = getAllProjectsIds()

  return paths
}

async function getSingleProjectData(params) {
  const postData = await getProjectData(params.id)
  
  if ( !postData ) {
    notFound()
  } else {
    return postData
  }
}

async function getAllProjects() {
  const allProjects = await getSortedProjectsData()

  return allProjects
}