import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jquery-page-7-1.jpg";
import HTMLImgB from "../../images/jquery-page-7-2.jpg";
import HTMLImgC from "../../images/jquery-page-7-3.jpg";
import HTMLImgD from "../../images/jquery-page-7-4.jpg";
import HTMLImgE from "../../images/jquery-page-7-5.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJQueryPage7 = () => (
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
<li className="current-link">Chaining</li>
<li><a href="/tutorial-jquery/lesson-8">Events</a></li>
<li><a href="/tutorial-jquery/lesson-9">Effects</a></li>
<li><a href="/tutorial-jquery/lesson-10">Animation</a></li>
<li><a href="/tutorial-jquery/lesson-11">Traversing the DOM</a></li>
<li><a href="/tutorial-jquery/lesson-12">JQuery and Forms</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Chaining</h4>
<p>Chaining is useful in JQuery as all it amounts to is that you can string together many functions in one line of code. For Example:</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>you must make sure that all of them work, because if one piece of the chain fails then the whole line of code simply won't run</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p><img src={HTMLImgE} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-jquery/lesson-8">NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJQueryPage7
