import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/css-page-7-1.jpg";
import HTMLImgB from "../../images/css-page-7-2.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialCSSPage7 = () => (
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
<li className="current-link">Color</li>
<li><a href="/tutorial-css/lesson-8">Background</a></li>
<li><a href="/tutorial-css/lesson-9">Border</a></li>
<li><a href="/tutorial-css/lesson-10">Positioning</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Color</h4>
<p>In CSS changing the color is quite basic. We can use any predefined color in css, like "red" or "blue". there are two other ways and that is with the rgb values, for example"rgb(255,125,10)" and then finally we can use the hex value, "FF0000".</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>we are not only limited to changing the text color</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-css/lesson-8">NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialCSSPage7
