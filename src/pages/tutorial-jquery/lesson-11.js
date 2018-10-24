import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jquery-page-11-1.jpg";
import HTMLImgB from "../../images/jquery-page-11-2.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJQueryPage10 = () => (
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
<li><a href="/tutorial-jquery/lesson-8">Events</a></li>
<li><a href="/tutorial-jquery/lesson-9">Effects</a></li>
<li><a href="/tutorial-jquery/lesson-10">Animation</a></li>
<li className="current-link">Traversing the DOM</li>
<li><a href="/tutorial-jquery/lesson-12">JQuery and Forms</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Traversing the DOM</h4>
<p>Once You have made a selection with JQuery, then you can use given methods to access, differnt parts of the DOM based on your selection</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-jquery/lesson-12" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJQueryPage10
