import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-4-1.jpg";
import HTMLImgB from "../../images/jscript-4-2.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJScriptPage4 = () => (
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
<li className="current-link">Syntax</li>
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
<h4>Syntax</h4>
<p><b>Case Sensitivity</b><br/>JavaScript is case sensitive so all the identifiers must be typed with same consistent capitalization. For example, hourNow means something different to HourNow or HOURNOW.</p>
<p><b>Whitespace</b><br/>Whitespace is usually insignificant in JavaScript, but it is occasionally necessary to use whitespace to separate sequences of characters that would otherwise be combined into a single token. For example, in:</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>the space between var and greeting cannot be removed, but the other spaces can be removed. </p>
<p><b>Semicolon</b><br/>A script is a series of instructions that a computer can follow one-by-one. Each individual instruction or step is known as a statement. Statements should end with a semicolon. A statement is an individual instruction that the computer should follow.</p>

<h4>Comments</h4>
<p><b>1. Single-Line Comments</b><br/>
In a single-line comment, anything that follows the two forward slash characters // on that line will not be processed by the JavaScript interpreter.</p>
<p><b>2. Multi-Line Comments</b><br/>
To write a comment that stretches over more than one line, you use a multi-line comment, starting with the /* characters and ending with the * / characters. Anything between these characters is not processed by the JavaScript interpreter.</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>

<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-5" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage4
