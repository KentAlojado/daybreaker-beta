import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jquery-page-1-1.jpg";
const TutorialJQueryPage = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li className="current-link">Introduction to JQuery</li>
<li><a href="/tutorial-jquery/lesson-2">Setup Environment</a></li>
<li><a href="/tutorial-jquery/lesson-3">Let’s Learn JQuery</a></li>
<li><a href="/tutorial-jquery/lesson-4">Selectors</a></li>
<li><a href="/tutorial-jquery/lesson-5">Methods</a></li>
<li><a href="/tutorial-jquery/lesson-6">Loops</a></li>
<li><a href="/tutorial-jquery/lesson-7">Chaining</a></li>
<li><a href="/tutorial-jquery/lesson-8">Events</a></li>
<li><a href="/tutorial-jquery/lesson-9">Effects</a></li>
<li><a href="/tutorial-jquery/lesson-10">Animation</a></li>
<li><a href="/tutorial-jquery/lesson-11">Traversing the DOM</a></li>
<li><a href="/tutorial-jquery/lesson-12">JQuery and Forms</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Introduction to JQuery</h4>
<p>JQuery is a library of JavaScript and is best used with traditional Javascript techniques. We can use it to find, change, and animate specific parts of our webpage, it can also be used for event handling such as when the page is ready or something is clicked, and it can be used to communicate with the web server without the need to reload the page. These are all things that can be accomplished with pure Javascript but JQuery does it with less code. The whole point is to do more while writing less, making our code more efficient.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>To learn JQuery, you’ll need to know or at least have a general understanding of HTML, CSS, and JavaScript.</p>
<p>Last, to use JQuery you need to either:</p>
<p>1. download JQuery from JQuery.com</p>
<p>2. include it from a CDN, like google</p>
<p className="bg-cs lft">
<a href="/tutorial-jquery/lesson-2" >START LESSON</a>
</p>
</div>
</div>
</div>
</Layout>
)

export default TutorialJQueryPage
