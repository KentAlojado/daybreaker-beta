import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-13-1.jpg";
import HTMLImgB from "../../images/jscript-13-2.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJScriptPage13 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-javascript/lesson-1">Introduction to JavaScript</a></li>
<li><a href="/tutorial-javascript/lesson-2">Let’s Learn JavaScript</a></li>
<li><a href="/tutorial-javascript/lesson-3">JavaScript Placement</a></li>
<li><a href="/tutorial-javascript/lesson-4">Syntax</a></li>
<li><a href="/tutorial-javascript/lesson-5">Variables</a></li>
<li><a href="/tutorial-javascript/lesson-6">Arrays</a></li>
<li><a href="/tutorial-javascript/lesson-7">Operatorsm</a></li>
<li><a href="/tutorial-javascript/lesson-8">If Statements</a></li>
<li><a href="/tutorial-javascript/lesson-9">While Loop</a></li>
<li><a href="/tutorial-javascript/lesson-10">For Loop</a></li>
<li><a href="/tutorial-javascript/lesson-11">Functions</a></li>
<li><a href="/tutorial-javascript/lesson-12">Events</a></li>
<li className="current-link">DOM</li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Document Object Model (DOM)</h4>
<p>The Document Object Model gives you scripting access to all the elements on a web page. Using JavaScript, you can create, modify and remove elements in the page dynamically.The most common way to access an HTML element is to use the id of the element. Here's an example:</p>
<p>JavaScript:<br/><img src={HTMLImgA} alt="tutorial"/></p>
<p>HTML:<br/><img src={HTMLImgB} alt="tutorial"/></p>
<p>This example changes the text on the page from 'Click the button' to 'Hello World!'. JavaScript access that element using getElementById function and using the id specified for that element in HTML. The innerHTML property is used to modify the text of HTML element.</p>
<p className="bg-cs lft">
<a href="/tutorial-jquery" >START OVER</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage13
