import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/css-page-9-1.jpg";
import HTMLImgB from "../../images/css-page-9-2.jpg";
import HTMLImgC from "../../images/css-page-9-3.jpg";
import HTMLImgD from "../../images/css-page-9-5.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialCSSPage9 = () => (
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
<li><a href="/tutorial-css/lesson-8">Background</a></li>
<li className="current-link">Border</li>
<li><a href="/tutorial-css/lesson-10">Positioning</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Border</h4>
<p>Earlier we mentioned the box model. It becomes easier to see this when we deal with the border of our elements. We can of course edit our borders to our liking. First we need to see it</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>So, we can now see our border. By default, our content is aligned towards the left. the line of our border is solid and 5 pixels thick. We can change our whole border</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>Or just a part of it</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>with the border-radius attribue we can also change the corners of our borders to round them</p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-css/lesson-10" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialCSSPage9
