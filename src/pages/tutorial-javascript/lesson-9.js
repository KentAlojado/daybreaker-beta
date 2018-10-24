import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-9-1.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJScriptPage9 = () => (
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
<li className="current-link">While Loop</li>
<li><a href="/tutorial-javascript/lesson-10">For Loop</a></li>
<li><a href="/tutorial-javascript/lesson-11">Functions</a></li>
<li><a href="/tutorial-javascript/lesson-12">Events</a></li>
<li><a href="/tutorial-javascript/lesson-13">DOM</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>While Loop</h4>
<p>There will be situations where you need to execute a set of code over and over again in programming. It is not practical to write same lines of code again and again. In such situations, you would need to write loop statements to reduce the number of lines.</p>
<p>Loops checks a condition. If it returns true, a code block will run. Then the condition is chacked again and if it still returns true, the code will run again. It repeats until the loop condition returns false.</p>
<p>The most basic form of loops is While Loop. While loop will continue to run as long as condition is true. While loops are generally useful if you do not the exact number of times the loop should run. Here's an example:</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>This while loop writes out multiplication table of 5. Each time the loop is run, each step is written to the page. This loop will continue to run for as long as the condition in the parentheses is true (counter is less than or equal to 10). The second statement inside while loop 'counter++;' increments the counter variable by one.</p>
<p>
<em>In this example, the condition specifies that the code should run ten times. A more typical use of a while loop would be when you do not know how many times you want the code to run. It should continue to run as long as a condition is met.</em></p>

<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-10" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage9
