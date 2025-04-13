"use client";

import Link from "next/link";
import Date from '@library/date';

const PaginatedBlogPosts = ({ items }) => {
  return (
      <div className="row">
        {items.map((item, index) => (
        <div className="col-lg-12" key={`blog-item-${index}`}>
            <div className="mil-blog-item mil-mb60">
                <Link href={`/blog/${item.id}`} className="mil-pub-cover mil-c-view mil-c-light mil-up">
                    <img src={item.image} alt={item.title} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                </Link>
                <div className="mil-descr">
                    <div className="mil-left">
                        <h3 className="mil-fs20 mil-mb10 mil-up mil-c-gone"><Link href={`/blog/${item.id}`} className="mil-c-gone">{item.title}</Link></h3>
                        <ul className="mil-pub-info mil-up">
                            <li><Link href={`/blog/${item.id}`} className="mil-c-gone">{item.categories.join(', ')}</Link></li>
                            <li><Date dateString={item.date} /></li>
                        </ul>
                    </div>
                    <div className="mil-right">
                        <p className="mil-soft mil-fs16 mil-up">{item.short}</p>
                    </div>
                </div>
            </div>
        </div>
        ))}
      </div>
  );
};
export default PaginatedBlogPosts;
  