import Link from "next/link";
import usePagination from '@library/usePagination.js'

export const dotts = '..'

const Pagination = ({ currentPage, totalItems, perPage, renderPageLink }) => {
    const pages = usePagination(totalItems, currentPage, perPage)

    return (
        <>
        {/* pagination */}
        <div className="mil-pagination mil-up mil-c-gone">
            {currentPage > 1 &&
            <Link key="pagination-item-prev" href={currentPage > 1 ? renderPageLink( currentPage - 1 ) : renderPageLink( currentPage )} className="mil-pag-arrow mil-prev">←</Link>
            }
            {currentPage <= 1 &&
            <div key="pagination-item-prev" className="mil-pag-arrow mil-prev">←</div>
            }
            <ul>
                {pages.map((pageNumber, i) =>
                    pageNumber === dotts ? (
                        <li key={`pagination-item-${i}`}>
                            <span>
                                {pageNumber}
                            </span>
                        </li>
                    ) : (
                        <li key={`pagination-item-${i}`}>
                            <Link href={renderPageLink(pageNumber)} className={`${pageNumber === currentPage ? 'mil-active' : ''}`}>
                                {pageNumber}
                            </Link>
                        </li>
                    )
                )}
            </ul>
            {currentPage < pages.length &&
            <Link key="pagination-item-next" href={currentPage < pages.length ? renderPageLink( currentPage + 1 ) : renderPageLink( currentPage )} className="mil-pag-arrow mil-next">←</Link>
            }
            {currentPage == pages.length &&
            <div key="pagination-item-next" className="mil-pag-arrow mil-next">←</div>
            }
        </div>
        {/* pagination end */}
        </>
    );
  };
  export default Pagination;