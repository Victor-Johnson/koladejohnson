import { Kanit, Sacramento, Unbounded } from 'next/font/google'

const primary_font = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
  adjustFontFallback: false,
})

const secondary_font = Sacramento({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
  adjustFontFallback: false,
})

const tertiary_font = Unbounded({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-tertiary',
  display: 'swap',
  adjustFontFallback: false,
})

import "./globals.css";

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/font-awesome.min.css";
import "@styles/css/plugins/magnific-popup.css";
import '@styles/scss/style-light.scss';

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import AppData from "@data/app.json";

export const metadata = {
  title: {
		default: AppData.settings.siteName,
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

const Layouts = ({
  children
}) => {
  return (
    <html lang="en" className={`${primary_font.variable} ${secondary_font.variable} ${tertiary_font.variable}`}>
      <body className="default--scrolling">
        {/* wrapper */}
        <div id="smooth-wrapper" className="mil-page-wrapper">
          {children}
        </div>
        {/* wrapper end */}
      </body>
    </html>
  );
};
export default Layouts;
