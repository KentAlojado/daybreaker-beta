import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jquery-page-6-1.jpg";
import HTMLImgB from "../../images/jquery-page-6-2.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJQueryPage6 = () => (
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
<li className="current-link">Loops</li>
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
<h4>Loops</h4>
<p>Loops in JQuery almost handle themselves. Remember that if we ask look for $("p") this will return all the p tags in our page. so to change all the p content all you would need to do is</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>Now to adjust what you want to edit is fust a matter of using filters when you search to get specific, for example</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-jquery/lesson-7" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJQueryPage6
