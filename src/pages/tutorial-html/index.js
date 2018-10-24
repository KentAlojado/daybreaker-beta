import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/html-pg-1-1.jpg";
import HTMLImgB from "../../images/html-pg-1-2.jpg";
const TutorialHTMLPage = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li className="current-link">Introduction to HTML</li>
<li><a href="/tutorial-html/lesson-2">Let’s Learn HTML</a></li>
<li><a href="/tutorial-html/lesson-3">Text</a></li>
<li><a href="/tutorial-html/lesson-4">List</a></li>
<li><a href="/tutorial-html/lesson-5">Links</a></li>
<li><a href="/tutorial-html/lesson-6">Images</a></li>
<li><a href="/tutorial-html/lesson-7">Tables</a></li>
<li><a href="/tutorial-html/lesson-8">Forms</a></li>
<li><a href="/tutorial-html/lesson-9">Markups</a></li>
<li><a href="/tutorial-html/lesson-10">Flash Movies</a></li>
<li><a href="/tutorial-html/lesson-11">Final Page</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Introduction to HTML</h4>
<p>You are about to walk into the wonderful world of HTML coding.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages and web applications. To speak basical ly it the bones of any website you visit. You can look at it clearly look at it on chrome if you click Ctrl+Shift+I. There you can see how much people put into making websites for your enjoyment. When writing HTML, you add "tags" to the text in order to create the structure. These tags tell the browser how to display the text or graphics in the document. </p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>Html is known as the bones of a webpage. But bones don't make up the body by itself. It needs muscles and skin. Html is usually used with a combination of Javascript and CSS. The Javascript allows for use of things not able to be done with HTML. And CSS is the design of the web page, allowing you change colors and fonts.</p>
<p>So that being said... Are you ready?</p>
<p className="bg-cs lft">
<a href="/tutorial-html/lesson-2" >START LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage
