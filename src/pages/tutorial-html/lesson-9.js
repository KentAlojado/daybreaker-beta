import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/page-9-1.png";
import HTMLImgB from "../../images/page-9-2.png";
import HTMLImgC from "../../images/page-9-3.png";
import HTMLImgD from "../../images/page-9-4.png";
import HTMLImgE from "../../images/page-9-5.png";
import "font-awesome/css/font-awesome.min.css";
const TutorialHTMLPage9 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-html">Introduction to HTML</a></li>
<li><a href="/tutorial-html/lesson-2">Let’s Learn HTML</a></li>
<li><a href="/tutorial-html/lesson-3">Text</a></li>
<li><a href="/tutorial-html/lesson-4">List</a></li>
<li><a href="/tutorial-html/lesson-5">Links</a></li>
<li><a href="/tutorial-html/lesson-6">Images</a></li>
<li><a href="/tutorial-html/lesson-7">Tables</a></li>
<li><a href="/tutorial-html/lesson-8">Forms</a></li>
<li className="current-link">Markups</li>
<li><a href="/tutorial-html/lesson-10">Flash Movies</a></li>
<li><a href="/tutorial-html/lesson-11">Final Page</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>MARKUPS</h4>
<p>First we will learn how to make comments. This is important so when you go back to your code you will know what each code piece does</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>Iding is a way to give something a code a spefic code value. Think of it like giving it a nickname.</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>An IFrame aka an Inline Frame is an HTML document embedded inside another HTML document on a website. The IFrame HTML element is often used to insert content from another source, such as an advertisement, into a Web page.</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>Iframes fully.</p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p>And the final Challenge in this chapter.</p>
<p><img src={HTMLImgE} alt="tutorial"/></p>
<h4>Summary</h4>
<ul className="BulletPoints">
<li>DOCTYPES tell browsers which version of HTML you are using.</li>
<li>You can add comments to your code between the <i className="fa fa-chevron-left"></i>!-- and --<i className="fa fa-chevron-right"></i> markers.</li>
<li>The id and class attributes allow you to identify particular elements.</li>
<li>The <i className="fa fa-chevron-left"></i>div<i className="fa fa-chevron-right"></i> and <i className="fa fa-chevron-left"></i>span<i className="fa fa-chevron-right"></i> elements allow you to group block-level and inline elements together.</li>
<li><i className="fa fa-chevron-left"></i>iframes<i className="fa fa-chevron-right"></i> cut windows into your web pages through which other pages can be displayed.</li>
<li>The <i className="fa fa-chevron-left"></i>meta<i className="fa fa-chevron-right"></i> tag allows you to supply all kinds of information about your web page.</li>
<li>Escape characters are used to include special characters in your pages such as <i className="fa fa-chevron-left"></i>, <i className="fa fa-chevron-right"></i>, and Â©.</li>
</ul>
<p className="bg-cs lft">
<a href="/tutorial-html/lesson-10" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage9
