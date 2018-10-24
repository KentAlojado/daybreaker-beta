import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/css-page-8-1.jpg";
import HTMLImgB from "../../images/css-page-8-2.jpg";
import HTMLImgC from "../../images/css-page-8-3.jpg";
import HTMLImgD from "../../images/css-page-8-4.jpg";
import HTMLImgE from "../../images/css-page-8-5.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialCSSPage8 = () => (
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
<li><a href="/tutorial-css/lesson-5">Selectors</a></li>
<li><a href="/tutorial-css/lesson-6">Attributes/Properties</a></li>
<li><a href="/tutorial-css/lesson-7">Color</a></li>
<li className="current-link">Background</li>
<li><a href="/tutorial-css/lesson-9">Border</a></li>
<li><a href="/tutorial-css/lesson-10">Positioning</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Background</h4>
<p>The background of any webpage is customizable with CSS. We can change the color, use an image as that background and then edit that background image. This all to make our page look exactly as we would like</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>here we change the background color at every p tag</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>here we changed the background image for the body of the page. We can now edit this to fit our own design, since by default it will repeat to fill then element if the image is too small</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>Make the image not repeat</p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p>repeat the image horizontally only</p>
<p><img src={HTMLImgE} alt="tutorial"/></p>
<p>don't repeat the image and set its position</p>
<p className="bg-cs lft">
<a href="/tutorial-css/lesson-9" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialCSSPage8
