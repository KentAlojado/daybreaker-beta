import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-7-1.jpg";
import HTMLImgB from "../../images/jscript-7-2.jpg";
import HTMLImgC from "../../images/jscript-7-2b.jpg";
import HTMLImgD from "../../images/jscript-7-3.jpg";
import HTMLImgE from "../../images/jscript-7-4.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJScriptPage7 = () => (
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
<li className="current-link">Operators</li>
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
<h4>Operators</h4>
<p><b>Assignment Operator</b><br/>
Assignment operator, =, assigns values from the right side operand to the left side operand:<br/><img src={HTMLImgA} alt="tutorial"/></p>
<p><b>Arithmetic Operators</b><br/>JavaScript contains the following mathematical operators, which you can use with numbers:</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p><b>String Operator</b><br/>There is just one string operator: the+ symbol. It is used to join the strings on either side of it. For example, you might have a first and last name in two separate variables and want to join them to show a full name. In this example, the variable called full Name would hold the string 'Ivy Stone':</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p><b>Comparison Operators</b><br/>You can evaluate two values by comparing one with other. Result will be a boolean: true or false. JavaScript contains the following comparison operators:</p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p><b>Logical Operators</b><br/>Logical operators allow you to compare results of more than one comparison operator. Result will be a boolean: true or false. JavaScript contains the following logical operators:</p>
<p><img src={HTMLImgE} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-8">NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage7
