import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-12-1.jpg";
import HTMLImgB from "../../images/jscript-12-2.jpg";
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
<li><a href="/tutorial-javascript/lesson-11">Functions</a></li>
<li className="current-link">Events</li>
<li><a href="/tutorial-javascript/lesson-13">DOM</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Events</h4>
<p>When you browse the web, your browser registers different types of events. Examples of events are when the page loads, when you click a button, when you press a key etc. Your script can then respond to these events. Scripts often respond to these events by updating the content of the web page which makes the page feel more interactive.</p>
<p>Let's look at the following example:</p>
<p>JavaScript:<br/><img src={HTMLImgA} alt="tutorial"/></p>
<p>HTML:<br/><img src={HTMLImgB} alt="tutorial"/></p>
<p>In this example, user clicks the button on page and the browser pops up an alert window with a message. Events of clicking the button is recorded, handled and reacted by the pop up.</p>
<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-13" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage10
