import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import "font-awesome/css/font-awesome.min.css";
const TutorialJQueryPage3 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-jquery">Introduction to JQuery</a></li>
<li><a href="/tutorial-jquery/lesson-2">Setup Environment</a></li>
<li className="current-link">Let’s Learn JQuery</li>
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
<h4>Let's Learn JQuery</h4>
<p>In this tutorial we will learn the foundations of JQuery. Once this is done you shold be able to freely incorporate the library and its functions to aid in your web development.</p>
<p>There are nine things that you need to understand to use JQuery.</p>
<ol>
<li>The css Selectors to navigate the DOM</li>
<li>The Methods included in the library, and how they vary</li>
<li>How to use loops</li>
<li>chaining methods together</li>
<li>Event handling</li>
<li>Various effects that you can use</li>
<li>Animation</li>
<li>Traversing the Dom from any position</li>
<li>Form Handling with JQuery</li>
</ol>
<p>In this tutorial we will show you all three, as well as some of the common ways to use them to help design your own webpage.</p>
<p className="bg-cs lft">
<a href="/tutorial-jquery/lesson-4" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJQueryPage3
