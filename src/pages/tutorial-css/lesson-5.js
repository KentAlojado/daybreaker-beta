import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/css-page-5-1.jpg";
import HTMLImgB from "../../images/css-page-5-2.jpg";
import HTMLImgC from "../../images/css-page-5-3.png";
import HTMLImgD from "../../images/css-page-5-4.jpg";
import HTMLImgE from "../../images/css-page-5-5.jpg";
import HTMLImgF from "../../images/css-page-5-6.jpg";
import HTMLImgG from "../../images/css-page-5-7.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialCSSPage5 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-css">Introduction to CSS</a></li>
<li><a href="/tutorial-css/lesson-2">Setup Environment</a></li>
<li><a href="/tutorial-css/lesson-3">Let’s Learn CSS</a></li>
<li><a href="/tutorial-css/lesson-4">DOM</a></li>
<li className="current-link">Selectors</li>
<li><a href="/tutorial-css/lesson-6">Attributes/Properties</a></li>
<li><a href="/tutorial-css/lesson-7">Color</a></li>
<li><a href="/tutorial-css/lesson-8">Background</a></li>
<li><a href="/tutorial-css/lesson-9">Border</a></li>
<li><a href="/tutorial-css/lesson-10">Positioning</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Selectors</h4>
<p>To use CSS, we use selectors to choose what part of our page we would like to apply our new rules to.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>Recall our earlier example. h1,h2, h3 are all selectors. In this case we are applying the same rules to all three.</p>
<p>Now inside of our html we can create ids and classes and assign them certain elements.</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>The point of this is so we can give specific parts of our webpage rules, without affecting the rules of all elements that may share the sam tag, we can apply css rules to them specifically.</p>
<p>Here are some Selector examples:<br/>
<img src={HTMLImgD} alt="tutorial"/><br/>
<img src={HTMLImgE} alt="tutorial"/><br/>
<img src={HTMLImgF} alt="tutorial"/><br/>
<img src={HTMLImgG} alt="tutorial"/><br/>
</p>
<p>We can further specify which element we want to select based on attributes. Here are the type of attribute selectors that we can use.</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-css/lesson-6" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialCSSPage5
