import React from 'react'
import Layout from '../../components/layout';
import "font-awesome/css/font-awesome.min.css";
const TutorialCSSPage3 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-css">Introduction to CSS</a></li>
<li><a href="/tutorial-css/lesson-2">Setup Environment</a></li>
<li className="current-link">Let’s Learn CSS</li>
<li><a href="/tutorial-css/lesson-4">DOM</a></li>
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
<h4>Let's Learn CSS</h4>
<p>As previously stated to learn CSS, you must know html. CSS is fairly straightforward. There are three thing that you really need to understand.</p>
<ol>
<li>The DOM</li>
<li>Selectors</li>
<li>Attributes/Properties</li>
</ol>
<p>In this tutorial we will show you all three, as well as some of the common ways to use them to help design your own webpage.</p>

<p className="bg-cs lft">
<a href="/tutorial-css/lesson-4" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialCSSPage3
