import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/page-4-1.png";
import HTMLImgB from "../../images/page-4-2.png";
import HTMLImgC from "../../images/page-4-3.png";
import HTMLImgD from "../../images/page-4-4.png";
import HTMLImgE from "../../images/page-4-5.png";
import "font-awesome/css/font-awesome.min.css";
const TutorialHTMLPage4 = () => (
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
<li className="current-link">List</li>
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
<h4>LIST</h4>
<p>Next we will learn about lists. This chapter will teach how to make bulleted list, numbered list and simlar things.
First thing is ordered list. <i className="fa fa-chevron-left"></i> ol <i className="fa fa-chevron-right"></i><i className="fa fa-chevron-left"></i> /ol <i className="fa fa-chevron-right"></i>. This will make any items added will be in a numbered ordered. To add items you need to tell the computer at add list items <i className="fa fa-chevron-left"></i> li <i className="fa fa-chevron-right"></i><i className="fa fa-chevron-left"></i> /li <i className="fa fa-chevron-right"></i>. </p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>
Next is unordered list. Instead of ol for ordered we use ul <i className="fa fa-chevron-left"></i> ul <i className="fa fa-chevron-right"></i><i className="fa fa-chevron-left"></i> /ul <i className="fa fa-chevron-right"></i> to make bullet points. 
</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>We can also make nested list. As the word nested implies it's a list inside another list.</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p>In the example we use two unordered list, but it does work with two ordered list, and a unordered list inside a ordered list, and visa versa.
Time for your mini test.</p>
<p><img src={HTMLImgE} alt="tutorial"/></p>
<h4>Summary</h4>
<ul className="BulletPoints">
<li>There are three types of HTML lists: ordered, unordered, and definition.</li>
<li>Ordered lists use numbers.</li>
<li>Unordered lists use bullets.</li>
<li>Definition lists are used to define terminology.</li>
<li>Lists can be nested inside one another.</li>
</ul>

<p className="bg-cs lft">
<a href="/tutorial-html/lesson-5" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage4
