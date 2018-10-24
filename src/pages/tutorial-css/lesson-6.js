import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/css-page-6-1.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialCSSPage6 = () => (
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
<li><a href="/tutorial-css/lesson-4">DOM</a></li>
<li><a href="/tutorial-css/lesson-5">Selectors</a></li>
<li className="current-link">Attributes/Properties</li>
<li><a href="/tutorial-css/lesson-7">Color</a></li>
<li><a href="/tutorial-css/lesson-8">Background</a></li>
<li><a href="/tutorial-css/lesson-9">Border</a></li>
<li><a href="/tutorial-css/lesson-10">Positioning</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Attributes / Properties</h4>
<p>After we have made a selection with a selector, we now need to make a rule. To make a rule we change the attributes of the element we selected. Attributes include but are not limited to , color, font , size, and the location on page.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>The attributes here are font-family and color.</p>
<p className="bg-cs lft">
<a href="/tutorial-css/lesson-7" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialCSSPage6
