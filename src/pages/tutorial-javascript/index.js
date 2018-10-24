import React from 'react'
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-1-1.jpg";
import HTMLImgB from "../../images/jscript-1-2.jpg";
const TutorialJScriptPage = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li className="current-link">Introduction to JavaScript</li>
<li><a href="/tutorial-javascript/lesson-2">Let’s Learn JavaScript</a></li>
<li><a href="/tutorial-javascript/lesson-3">JavaScript Placement</a></li>
<li><a href="/tutorial-javascript/lesson-4">Syntax</a></li>
<li><a href="/tutorial-javascript/lesson-5">Variables</a></li>
<li><a href="/tutorial-javascript/lesson-6">Arrays</a></li>
<li><a href="/tutorial-javascript/lesson-7">Operators</a></li>
<li><a href="/tutorial-javascript/lesson-8">If Statements</a></li>
<li><a href="/tutorial-javascript/lesson-9">While Loop</a></li>
<li><a href="/tutorial-javascript/lesson-10">For Loop</a></li>
<li><a href="/tutorial-javascript/lesson-11">Functions</a></li>
<li><a href="/tutorial-javascript/lesson-12">Events</a></li>
<li><a href="/tutorial-javascript/lesson-13">DOM</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Introduction to JavaScript</h4>
<p>JavaScript is a scripting language which allows you to make web pages more interactive and dynamic. With JavaScript, you can access and modify web contents. You can also specify a set of rules on how to access or modify page contents. JavaScript also alows you to react to specific events triggered by user or browswer such as click of a button and how to handle them.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>This is a simple script which adds a greeting into an HTML page. The greeting changes depending on the time of day. Don't worry about it for now. Everything will be covered in the upcoming chapters.</p>
<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-2" >START LESSON</a>
</p>
</div>
</div>
</div>
</Layout>
)
export default TutorialJScriptPage
