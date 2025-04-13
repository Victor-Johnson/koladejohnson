import PaginatedBlog from '@components/PaginatedBlog';
import Pagination from '@components/Pagination';
import Link from "next/link";

import AppData from "@data/app.json";

import { getSortedCategoriesData } from "@library/categories";
import { getPaginatedPostsData } from "@library/posts";

export const metadata = {
  title: {
		default: "Blog",
	},
  description: AppData.settings.siteDescription,
}

async function Blog() {
  const postsData = await getAllPosts();

  const heading = {
    "title": "Blog",
    "subtitle": "My academic pursuit led me to <span class='mil-accent'>New York University</span> (NYU), where I delved into the world of arts and letters."
  }

  return (
    <>
      <div className="mil-content-frame" id="page">
        
        {/* blog */}
        <div className="mil-container mil-p-90-90" id="blog">
            <div className="row">
                <div className="col-lg-8 mil-mb90">
                    <h2 className="mil-fs24 mil-mb30 mil-up">{heading.title}</h2>
                    <p className="mil-fs18 mil-up" dangerouslySetInnerHTML={{__html : heading.subtitle}} />
                </div>
                <div className="col-12">
                    <ul className="mil-filter mil-mb60 mil-up">
                        <li><Link href="/blog" className="mil-active">All</Link></li>
                        {postsData.categories.map((item, key) => (
                        <li key={`categories-item-${key}`}><Link href={`/blog/category/${item.id}`}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>

            <PaginatedBlog
              items={postsData.posts}
            />
            
            <Pagination
              currentPage={postsData.currentPage}
              totalItems={postsData.totalPosts}
              perPage={AppData.settings.perPage}
              renderPageLink={(page) => `/blog/page/${page}`}
            />
        </div>
        {/* blog end */}

      </div>
    </>
  );
};
export default Blog;

async function getAllPosts() {
  const { posts, total } = getPaginatedPostsData( AppData.settings.perPage, 1 );
  const categoriesData = await getSortedCategoriesData()

  return {
    posts: posts,
    totalPosts: total,
    categories: categoriesData,
    currentPage: 1
  }
}