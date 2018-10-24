import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jquery-page-12-1.jpg";
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
<li><a href="/tutorial-jquery/lesson-11">Traversing the DOM</a></li>
<li className="current-link">JQuery and Forms</li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Forms and JQuery</h4>
<p>JQuery can also be used with your html forms. Using previously learned methods and selectors to allow changes to your page by your form(s)</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-jquery" >START OVER</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJQueryPage10
