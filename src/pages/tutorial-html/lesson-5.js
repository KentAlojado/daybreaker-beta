import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/page-5-1.png";
import HTMLImgB from "../../images/page-5-2.png";
import HTMLImgC from "../../images/page-5-3.png";
import HTMLImgD from "../../images/page-5-4.png";
import HTMLImgE from "../../images/page-5-5.png";
import "font-awesome/css/font-awesome.min.css";
const TutorialHTMLPage5 = () => (
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
<li className="current-link">Links</li>
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
<h4>LINKS</h4>
<p>Links are we will be learning next. They will allow us to go to other pages and allow us to grow websites. First thing well be doing is learning how to you the link tag the a <i className="fa fa-chevron-left"></i> a <i className="fa fa-chevron-right"></i> <i className="fa fa-chevron-left"></i> /a <i className="fa fa-chevron-right"></i> tag.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>
The interesting thing you will notice is that what we write in between the <i className="fa fa-chevron-right"></i> <i className="fa fa-chevron-left"></i> is going to change color. This is a hyperlink being made. just like the next buttons we have used so far. Next we will put the links in a unordered list. 
</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>Now we will be linking things to other pages you made so far. Go to where you made the other tutorials look at there path.</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>Next we will learn how to make a new tab using the target element. </p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p>Time for your mini test. </p>
<p><img src={HTMLImgE} alt="tutorial"/></p>
<h4>Summary</h4>
<ul className="BulletPoints">
<li>Links are created using the element.</li>
<li>The element uses the href attribute to indicate the page you are linking to.</li>
<li>If you are linking to a page within your own site, it is best to use relative links rather than qualified URLs.</li>
<li>You can create links to open email programs with an email address in the "to" field.</li>
<li>Opening tags can carry attributes, which tell us more about the content of that element.</li>
<li>You can use the id attribute to target elements within a page that can be linked to.</li>
</ul>
<p className="bg-cs lft">
<a href="/tutorial-html/lesson-6" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage5
