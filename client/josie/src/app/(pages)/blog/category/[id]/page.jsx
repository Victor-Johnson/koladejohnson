import PaginatedBlog from '@components/PaginatedBlog';
import Link from "next/link";

import { notFound } from 'next/navigation';

import { getSortedCategoriesData } from "@library/categories";
import { getAllCategoriesIds, getCategoryData } from "@library/categories";
import { getCategoryPosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const categoryData = await getSingleCategoryData(params);

  return {
    title: categoryData.title + " | Blog",
  }
}

async function BlogCategory( { params } ) {
  const posts = await getAllPosts(params);
  const categoryData = await getSingleCategoryData(params);
  const categories = await getAllCategories();

  return (
    <>
      <div className="mil-content-frame" id="page">
        
        {/* blog */}
        <div className="mil-container mil-p-90-90" id="blog">
            <div className="row">
                <div className="col-lg-8 mil-mb90">
                    <h2 className="mil-fs24 mil-mb30 mil-up">{categoryData.title}</h2>
                    <p className="mil-fs18 mil-up" dangerouslySetInnerHTML={{__html : categoryData.subtitle}} />
                </div>
                <div className="col-12">
                    <ul className="mil-filter mil-mb60 mil-up">
                        <li><Link href="/blog">All</Link></li>
                        {categories.map((item, key) => (
                        <li key={`categories-item-${key}`}><Link href={`/blog/category/${item.id}`} className={ item.id == categoryData.id ? "mil-active" : ""}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>

            <PaginatedBlog
              items={posts}
            />
        </div>
        {/* blog end */}

      </div>
    </>
  );
};
export default BlogCategory;

export async function generateStaticParams() {
    const paths = getAllCategoriesIds()
    return paths
}

async function getSingleCategoryData(params) {
    const categoryData = await getCategoryData(params.id)

    if ( !categoryData ) {
        notFound()
    } else {
        return categoryData
    }
}

async function getAllPosts( params ) {
    const categoryPosts = await getCategoryPosts(params.id)

    if (!categoryPosts.length) {
        notFound()
    }

    return categoryPosts
}

async function getAllCategories() {
  const categoriesData = await getSortedCategoriesData()

  return categoriesData
}