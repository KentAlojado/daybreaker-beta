import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jquery-page-5-1.jpg";
import HTMLImgB from "../../images/jquery-page-5-2.jpg";
import HTMLImgC from "../../images/jquery-page-5-3.jpg";
import HTMLImgD from "../../images/jquery-page-5-4.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJQueryPage5 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-jquery">Introduction to JQuery</a></li>
<li><a href="/tutorial-jquery/lesson-2">Setup Environment</a></li>
<li><a href="/tutorial-jquery/lesson-3">Let’s Learn JQuery</a></li>
<li><a href="/tutorial-jquery/lesson-4">Selectors</a></li>
<li className="current-link">Methods</li>
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
<h4>Methods</h4>
<p>Now that we can find what we want to work on in our page, we can actually use functions on them. Some JQuery methods will get and set content on your web page, they only thing that has to be done differently in those functions are adding in the new value that you would like<br/>
get:</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>set:<br/><img src={HTMLImgB} alt="tutorial"/></p>
<h4>Get/SetMethods</h4>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>beyond the set and get methods, there are also methods to add and remove conetent from the page such as append(), before, addClass, remove() to name a few. There is more than likely a function that will aid you in exactly what you would like to do.</p>
<h4>Extra Methods</h4>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-jquery/lesson-6" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJQueryPage5
