import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/page-11-1.png";
import "font-awesome/css/font-awesome.min.css";
const TutorialHTMLPage11 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-html">Introduction to HTML</a></li>
<li><a href="/tutorial-html/lesson-2">Let’s Learn HTML</a></li>
<li><a href="/tutorial-html/lesson-3">Text</a></li>
<li><a href="/tutorial-html/lesson-4">List</a></li>
<li><a href="/tutorial-html/lesson-5">Links</a></li>
<li><a href="/tutorial-html/lesson-6">Images</a></li>
<li><a href="/tutorial-html/lesson-7">Tables</a></li>
<li><a href="/tutorial-html/lesson-8">Forms</a></li>
<li><a href="/tutorial-html/lesson-10">Markups</a></li>
<li><a href="/tutorial-html/lesson-10">Flash Movies</a></li>
<li className="current-link">Final Page</li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>CONGRATULATIONS</h4>
<p>YOU BEAT THE TUTORIAL!!! GREAT JOB!!!</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>

</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage11
