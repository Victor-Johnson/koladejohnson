import React from "react";
import { notFound } from 'next/navigation';

import { getAllPostsIds, getPostData, getSortedPostsData } from "@library/posts";
import { getAuthorData } from "@library/authors";

import Date from '@library/date';

import Link from "next/link";

async function PostsDetail( { params } ) {
  const postData = await getSinglePostData(params);
  const authorData = await getSingleAuthorData(postData.author.toLowerCase().replace(' ', '-'));
  const posts = await getAllPosts();

  //prev next navigation
  let prev = { "id": 0, "key": 0 }
  let next = { "id": 0, "key": 0 }
  let first = { "id": 0 }
  let last = { "id": 0 }

  posts.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  })

  posts.forEach(function(item, key){
    if ( key == prev.key ) { prev.id = item.id; }
    if ( key == next.key ) { next.id = item.id; }
    if ( key == 0 ) { first.id = item.id; }
    if ( key == posts.length-1 ) { last.id = item.id; }
  });

  if ( prev.key == -1 ) { prev.id = last.id; }
  if ( next.key == posts.length ) { next.id = first.id; }

  return (
    <>
      <div className="mil-content-frame" id="page">
        
        {/* publication */}
        <div className="mil-container mil-p-90-0" id="contact">
            <div className="row">
                <div className="col-xl-8 mil-mb60">
                    <h2 className="mil-fs24 mil-mb30 mil-up">{postData.title}</h2>
                    <ul className="mil-pub-info mil-up">
                        <li>
                          {postData.categories.map((item, key) => (
                          <span key={`post-tag-item-${key}`}>
                            <Link href={`/blog/category/${item.toLowerCase().replace(' ', '-')}`} className="mil-c-gone">{item}</Link>
                            {key+1 !== postData.categories.length &&
                                <span>, </span>
                            }
                          </span>
                          ))}
                        </li>
                        <li><Date dateString={postData.date} /></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mil-container-out">
            <div className="mil-about-banner">
                <div className="mil-image-frame mil-up">
                    <img src={postData.image} alt={postData.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                </div>
            </div>
        </div>
        <div className="mil-container mil-p-90-90">
            <div className="row">
                <div className="col-12 mil-text mil-soft mil-fs16 mil-mb30 mil-up" dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
            </div>
            <div className="mil-pagination mil-up mil-c-gone">              
                {prev.id != 0 ? (
                <Link href={`/blog/${prev.id}`} className="mil-pag-arrow mil-prev">←</Link>
                ) : (
                <div className="mil-pag-arrow mil-prev">←</div>
                )}
                <Link href="/blog" className="mil-all">All publications</Link>
                {next.id != 0 ? (
                <Link href={`/blog/${next.id}`} className="mil-pag-arrow mil-next">←</Link>
                ) : (
                <div className="mil-pag-arrow mil-next">←</div>
                )}
            </div>
        </div>
        {/* publication end */}

      </div>
    </>
  );
};
export default PostsDetail;

export async function generateStaticParams() {
  const paths = getAllPostsIds()

  return paths
}

async function getSinglePostData(params) {
  const postData = await getPostData(params.id)
  
  if ( !postData ) {
    notFound()
  } else {
    return postData
  }
}

async function getSingleAuthorData(author_id) {
    const authorData = await getAuthorData(author_id)
    
    return authorData
}

async function getAllPosts() {
    const allPosts = await getSortedPostsData()
  
    return allPosts
  }