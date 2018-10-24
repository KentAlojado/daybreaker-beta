import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/index-css.jpg";
const TutorialCSSPage = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li className="current-link">Introduction to CSS</li>
<li><a href="/tutorial-css/lesson-2">Setup Environment</a></li>
<li><a href="/tutorial-css/lesson-3">Let’s Learn CSS</a></li>
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
<h4>Introduction to CSS</h4>
<p>You are about to walk into the wonderful world of HTML coding.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>What we did here is we set a rule, that when these header tags appear their content must be of that font and that color.</p>
<p>To learn CSS, you’ll need to know or at least have a general understanding of HTML.</p>
<p className="bg-cs lft">
<a href="/tutorial-css/lesson-2" >START LESSON</a>
</p>
</div>
</div>
</div>
</Layout>
)

export default TutorialCSSPage
