import Preloader from "@layouts/preloader/Index";
import Cursor from "@layouts/cursor/Index";
import ScrollProgress from "@layouts/scroll-progress/Index";
import Sidebar from "@layouts/sidebar/Index";

const PagesLayouts = ({
  children
}) => {
  return (
    <>
      {/* preloader */}
      <Preloader status={1} />
      {/* preloader end */}

      {/* cursor */}
      <Cursor />
      {/* cursor end */}

      {/* scroll progress */}
      <ScrollProgress />
      {/* scroll progress end */}

      {/* sidebar */}
      <Sidebar onepage={1} />
      {/* sidebar end */}

      {/* content */}
      <div id="smooth-content" className="mil-content">
        
        {children}

      </div>
      {/* content end */}
    </>
  );
};
export default PagesLayouts;
