import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jquery-page-4-1.jpg";
import HTMLImgB from "../../images/jquery-page-4-2.jpg";
import HTMLImgC from "../../images/jquery-page-4-3.jpg";
import HTMLImgD from "../../images/jquery-page-4-4.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJQueryPage4 = () => (
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
<li className="current-link">Selectors</li>
<li><a href="/tutorial-jquery/lesson-5">Methods</a></li>
<li><a href="/tutorial-jquery/lesson-6">Loops</a></li>
<li><a href="/tutorial-jquery/lesson-7">Chaining</a></li>
<li><a href="/tutorial-jquery/lesson-8">Events</a></li>
<li><a href="/tutorial-jquery/lesson-9">Effects</a></li>
<li><a href="/tutorial-jquery/lesson-10">Animation</a></li>
<li><a href="/tutorial-jquery/lesson-11">Traversing the DOM</a></li>
<li><a href="/tutorial-jquery/lesson-12">JQuery and Forms</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Selectors</h4>
<p>Before we can do anything in JQuery, we have to be able to find the element we want to edit. JQuery uses css-style selectors, it also provides its own unique ones, such as :first. There are your basic selectors such as by id or by element, then we can find thinngs by hierarchy, such as parent - child, and then we can filter our selectors to be even more precise in our search.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<h4>Basic Selectors</h4>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-jquery/lesson-5" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJQueryPage4
