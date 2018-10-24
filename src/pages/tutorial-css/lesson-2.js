import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/css-page-2-1.jpg";
import HTMLImgB from "../../images/css-page-2-2.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialCSSPage2 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-css/">Introduction to CSS</a></li>
<li className="current-link">Setup Environment</li>
<li><a href="/tutorial-css/lesson-3">Let’s Learn CSS</a></li>
<li><a href="/tutorial-css/lesson-4">DOM</a></li>
<li><a href="/tutorial-css/lesson-5">Selectors</a></li>
<li><a href="/tutorial-css/lesson-6">Attributes/Properties</a></li>
<li><a href="/tutorial-css/lesson-7">Color</a></li>
<li><a href="/tutorial-css/lesson-8">Background</a></li>
<li><a href="/tutorial-css/lesson-9">Border</a></li>
<li><a href="/tutorial-css/lesson-10">Positioning</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Setup Environment</h4>
<p>To set up for using CSS is fairly simple. There are two ways one is internal</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>What we do here is use a style tag to let us know what type of file we will be using, then all of our code will go within. This is usually placed within the head tags of our html code. We would use this if we aren't making too many css rules or we want something to act differently for just this one page.</p>
<p>Then there is external:</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>In external css we use the link tag, which will also tell us the type, but with href it gives us the path to css file as well as what relationship(rel) it has to our html file, in our case "stylesheet". This tag is also added within our head tags.</p>
<p className="bg-cs lft">
<a href="/tutorial-css/lesson-3" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialCSSPage2
