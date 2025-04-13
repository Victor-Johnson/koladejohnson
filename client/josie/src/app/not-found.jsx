import Link from "next/link";

import Preloader from "@layouts/preloader/Index";
import Cursor from "@layouts/cursor/Index";
import ScrollProgress from "@layouts/scroll-progress/Index";
import Sidebar from "@layouts/sidebar/Index";

const NotFound = () => {
  return (
    <>
      {/* preloader */}
      <Preloader status={0} />
      {/* preloader end */}

      {/* cursor */}
      <Cursor />
      {/* cursor end */}

      {/* scroll progress */}
      <ScrollProgress />
      {/* scroll progress end */}

      {/* sidebar */}
      <Sidebar />
      {/* sidebar end */}

      {/* content */}
      <div id="smooth-content" className="mil-content">

        <div className="mil-content-frame" id="page">
          
          {/* 404 */}
          <div className="mil-container">
              <div className="mil-404-frame">
                  <div className="row">
                      <div className="col-xl-12">
                          <div className="mil-jcs mil-aie">
                              <p className="mil-suptitle mil-fs14">Page Not Found</p>
                              <p className="mil-error">error</p>
                          </div>
                          <h1 className="mil-404 mil-tac mil-992-tal mil-mb20">404</h1>
                          <div className="row">
                              <div className="col-0 col-lg-7"></div>
                              <div className="col-sm-5">
                                  <p className="mil-soft mil-fs16">
                                    The page you are looking for does not exist, it may have been moved or removed altogether.{" "} 
                                    <Link href="/" className="mil-text-link">Back to Home</Link>
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* 404 end */}

        </div>

      </div>
      {/* content end */}
    </>
  );
};
export default NotFound;
