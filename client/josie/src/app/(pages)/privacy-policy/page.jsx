import React from "react";

import AppData from "@data/app.json";

export const metadata = {
    title: {
        default: "Privacy Policy",
    },
    description: AppData.settings.siteDescription,
}

const PrivacyPage = () => {
  return (
    <>
      <div className="mil-content-frame" id="page">
        
        {/* privacy policy */}
        <div className="mil-container mil-p-90-90">
            <div className="row">
                <div className="col-xl-12">
                    <h2 className="mil-fs24 mil-mb60 mil-up">Privacy Policy</h2>
                    <h3 className="mil-fs20 mil-mb30 mil-up">About us</h3>
                    <p className="mil-soft mil-fs16 mil-mb60 mil-up">Our website address is: <a href="#." className="mil-text-link">https://mydomain.com.</a></p>
                    <h3 className="mil-fs20 mil-mb30 mil-up">Comments</h3>
                    <p className="mil-soft mil-fs16 mil-mb30 mil-up">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.</p>
                    <p className="mil-soft mil-fs16 mil-mb60 mil-up">An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The privacy policy for the Gravatar service is available here: https://automattic.com/privacy/. After approval of your comment, your profile image will be visible to the public in the context of your comment.</p>
                    <h3 className="mil-fs20 mil-mb30 mil-up">Media</h3>
                    <p className="mil-soft mil-fs16 mil-mb60 mil-up">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS). Website visitors can download and extract location data from images on the website.</p>
                    <h3 className="mil-fs20 mil-mb30 mil-up">Cookies</h3>
                    <p className="mil-soft mil-fs16 mil-mb30 mil-up">If you leave a comment on our site, you may choose to save your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                    <p className="mil-soft mil-fs16 mil-mb30 mil-up">If you visit our Login page, a temporary cookie will be set to determine if your browser accepts cookies. This cookie does not contain personal data and is deleted when you close the browser.</p>
                    <p className="mil-soft mil-fs16 mil-mb30 mil-up">When you log in, several cookies will be installed to save your login information and screen display options. Access cookies will remain for two days and screen options cookies will be saved for one year. If you select "Remember me" in your login, these will be saved for two weeks. If you log out of your account, the access cookies will be deleted.</p>
                    <p className="mil-soft mil-fs16 mil-mb60 mil-up">If you edit or publish an article, an additional cookie will be saved in your browser. This cookie does not include personal data and simply indicates the ID of the article you just edited. Expires after 1 day.</p>
                    <h3 className="mil-fs20 mil-mb30 mil-up">Embedded content from other websites</h3>
                    <p className="mil-soft mil-fs16 mil-mb30 mil-up">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves exactly the same as if the visitor had visited the other website.</p>
                    <p className="mil-soft mil-fs16 mil-mb60 mil-up">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
                    <h3 className="mil-fs20 mil-mb30 mil-up">Who do we share your data with?</h3>
                    <p className="mil-soft mil-fs16 mil-mb60 mil-up">If you request a password reset, your IP address will be included in the reset email.</p>
                    <h3 className="mil-fs20 mil-mb30 mil-up">How long do we keep your data</h3>
                    <p className="mil-soft mil-fs16 mil-mb30 mil-up">If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can automatically recognize and approve any follow-up comments instead of holding them in a moderation queue.</p>
                    <p className="mil-soft mil-fs16 mil-mb60 mil-up">For users who register on our website (if any), all personal information they provide will be stored. Any user can view, edit or delete their personal information whenever they wish (except for the username which cannot be edited). Website administrators can also view and edit this information.</p>
                    <h3 className="mil-fs20 mil-mb30 mil-up">What rights do you have over your data</h3>
                    <p className="mil-soft mil-fs16 mil-mb60 mil-up">If you have an account on this site, or have left comments, you can request the export of a file with your collected personal data, including any other data you have provided to us. You can also request the deletion of any personal data we hold about you. This does not include data that we are required to retain for administrative, legal or security purposes.</p>
                    <h3 className="mil-fs20 mil-mb30 mil-up">What rights do you have over your data</h3>
                    <p className="mil-soft mil-fs16 mil-mb60 mil-up">If you have an account on this site, or have left comments, you can request the export of a file with your collected personal data, including any other data you have provided to us. You can also request the deletion of any personal data we hold about you. This does not include data that we are required to retain for administrative, legal or security purposes.</p>
                    <h3 className="mil-fs20 mil-mb30 mil-up">Where is your data sent?</h3>
                    <p className="mil-soft mil-fs16 mil-up">Visitor comments may be validated by an automated spam detection service.</p>
                </div>
            </div>
        </div>
        {/* privacy policy end */}

      </div>
    </>
  );
};
export default PrivacyPage;
