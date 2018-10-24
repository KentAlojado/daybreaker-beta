import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/css-page-4-1.jpg";
import HTMLImgB from "../../images/css-page-4-2.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialCSSPage4 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-css">Introduction to CSS</a></li>
<li><a href="/tutorial-css/lesson-2">Setup Environment</a></li>
<li><a href="/tutorial-css/lesson-3">Let’s Learn CSS</a></li>
<li className="current-link">DOM</li>
<li><a href="/tutorial-css/lesson-5">Selectors</a></li>
<li><a href="/tutorial-css/lesson-6">Attributes/Properties</a></li>
<li><a href="/tutorial-css/lesson-7">Color</a></li>
<li><a href="/tutorial-css/lesson-8">Background</a></li>
<li><a href="/tutorial-css/lesson-9">Border</a></li>
<li><a href="/tutorial-css/lesson-10">Positioning</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>DOM</h4>
<p>When dealing with a webpage, we must understand the DOM(document object model). Siimpy put the dom allocates every element of your html file a certain amount of space and encapsulates it in a box.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>Once this is understood, then we can edit these as we see fit. We should also know how the DOM is set up:</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>with this we are ready to go into our file and style our page.</p>
<p className="bg-cs lft">
<a href="/tutorial-css/lesson-5" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialCSSPage4
