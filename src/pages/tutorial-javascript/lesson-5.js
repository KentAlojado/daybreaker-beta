import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-5-1.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJScriptPage5 = () => (
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
<li className="current-link">Variables</li>
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
<h4>Variables</h4>
<p>A variable is a name for value which is stored on the browser to be used by a script. All variables have a name, type and value, and should be declared with a var statement before they are used in a script A variable name can be any valid identifier consisting of letters, digits, underscores ( _ ) and dollar signs ($) that does not begin with a digit and is not a reserved JavaScript keyword.</p>
<p>In JavaScript, there are three primitive data types:</p>
<ol>
<li>Numeric - The numeric data type handles numbers. For example, 12 or 12.77</li>
<li>Strings - consists of letters and other characters. For instance, "hello". The strings are placed inside quote marks. The quotes can be single or double quotes, but they must match. If you start with a single quote, you must end with a single quote, and vice-versa.</li>
<li>Boolean - Boolean data types can have one of two va lues: true or false</li>
</ol>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>
<em>By Convention, variable names begin with a lowercase letter and each subsequent word begins with upper case if there are more than one word in the variable. For instance, hourlyWage.</em>
</p>
<p>    
	<em>It is good programing pactice to to choose meaningful variable names to be able to easily understand what it is used for.</em>
</p>
<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-6" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage5
