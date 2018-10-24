import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-11-1.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJScriptPage10 = () => (
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
<li className="current-link">Functions</li>
<li><a href="/tutorial-javascript/lesson-12">Events</a></li>
<li><a href="/tutorial-javascript/lesson-13">DOM</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Functions</h4>
<p>Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can reuse the function (rather than repeating the same set of statements. You must have seen function write() with document.write() in the earlier lessons. We were using these functions again and again, but they had been written in core JavaScript only once.</p>
<p>JavaScript allows us to write our own functions as well. This section explains how to write your own functions in JavaScript.</p>
<p>To create a function, you give it a name and then write statements needed to achieve its task inside the curly braces. You declare a function by using the keyword, function. You give the function a name followed by parethesis. Code inside the curly braces is the task that function does. Here's an example:</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>Function, sayHello() prints a message to the page. Having decalred the function, you can execute all of the statements inside the curly braces by calling the function. To call the function, you simple use the function name with parethesis (sayHello(); is written outside the function).</p>
<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-12" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage10
