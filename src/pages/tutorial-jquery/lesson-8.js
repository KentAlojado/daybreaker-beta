import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jquery-page-8-1.jpg";
import HTMLImgB from "../../images/jquery-page-8-2.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJQueryPage8 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-jquery">Introduction to JQuery</a></li>
<li><a href="/tutorial-jquery/lesson-2">Setup Environment</a></li>
<li><a href="/tutorial-jquery/lesson-3">Let’s Learn JQuery</a></li>
<li><a href="/tutorial-jquery/lesson-4">Selectors</a></li>
<li><a href="/tutorial-jquery/lesson-5">Methods</a></li>
<li><a href="/tutorial-jquery/lesson-6">Loops</a></li>
<li><a href="/tutorial-jquery/lesson-7">Chaining</a></li>
<li className="current-link">Events</li>
<li><a href="/tutorial-jquery/lesson-9">Effects</a></li>
<li><a href="/tutorial-jquery/lesson-10">Animation</a></li>
<li><a href="/tutorial-jquery/lesson-11">Traversing the DOM</a></li>
<li><a href="/tutorial-jquery/lesson-12">JQuery and Forms</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Events</h4>
<p>JQuery can be used for event handling. The .on() method is what you will use to handle all of your events. All you need is to know which event you want to handle, and what you want done when it occurs. </p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<h4>Common Events</h4>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-jquery/lesson-9" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJQueryPage8
