import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-8-1.jpg";
import HTMLImgB from "../../images/jscript-8-2.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJScriptPage8 = () => (
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
<li className="current-link">If Statements</li>
<li><a href="/tutorial-javascript/lesson-9">While Loop</a></li>
<li><a href="/tutorial-javascript/lesson-10">For Loop</a></li>
<li><a href="/tutorial-javascript/lesson-11">Functions</a></li>
<li><a href="/tutorial-javascript/lesson-12">Events</a></li>
<li><a href="/tutorial-javascript/lesson-13">DOM</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>If Statements</h4>
<p>Conditional statements are often needed in programming. You may want to execute a block of code only if certain conditions are met. If statements are used in such situations. This lesson will cover two forms of if statements:</p>
<p><b>1. If Statement</b><br/>If statement is a conditional statement. It checks the condition and if the condition evaluates to true, subsequent code block is executed. For example:</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>In this example, we write a message to the page only if the score is greater than or equal to 70.<br/>As you may have guessed, document.write() writes content into the document.</p>
<p><b>2. If...Else Statement</b><br/>If...Else statement checks a condition. If it resolves to true, first code block is executed. If it resolves to false, second code block is executed. For example:</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>This example is similar to the previous one. However, with an added step. If the score is greater than or equal to 70, it writes one message. And if the score is less than 70, it prints a different messsage.</p>
<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-9" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage8
