import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-10-1.jpg";
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
<li className="current-link">For Loop</li>
<li><a href="/tutorial-javascript/lesson-11">Functions</a></li>
<li><a href="/tutorial-javascript/lesson-12">Events</a></li>
<li><a href="/tutorial-javascript/lesson-13">DOM</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>For Loop</h4>
<p>Another kind of loops is For Loop. You use a for loop if you need to run code a specific number of times. For loops have mainly 4 parts:</p>
<ol>
<li><b>Initialization</b> - A value is set initially which is the starting value of the counter</li>
<li><b>Condition</b> - Tests whether the given conditional statement is true or not</li>
<li><b>Iteration</b> - Statement which increments or decrements the counter</li>
<li><b>Body</b> - Code inside the for loop. Body is only executed if condition statement (#2) is true</li>
</ol>
<p>Let's look at an example:<br/><img src={HTMLImgA} alt="tutorial"/></p>
<p>A for loop is often used to loop through the items in an array. In this example, the scores are stored in an array called scores. The total number of items in the array is stored in a variable called array length. This number is obtained using the length property of the array. counter is stored in a variable called i. The loop starts with the for keyword, then contains the condition inside the parentheses. As long as the counter is less than the total number of items in the array, the contents of the curly braces will continue to run. Each time the loop runs, items in the scores array is printed to the page.</p>
<p>
<em>Remember: Array index starts at 0 and not 1.</em>
</p>
<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-11" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage10
