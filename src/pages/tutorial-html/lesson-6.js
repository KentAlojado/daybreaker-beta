import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/page-6-1.png";
import HTMLImgB from "../../images/page-6-2.png";
import HTMLImgC from "../../images/page-6-3.png";
import HTMLImgD from "../../images/page-6-4.png";
import HTMLImgE from "../../images/page-6-5.png";
import "font-awesome/css/font-awesome.min.css";
const TutorialHTMLPage6 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-html">Introduction to HTML</a></li>
<li><a href="/tutorial-html/lesson-2">Let’s Learn HTML</a></li>
<li><a href="/tutorial-html/lesson-3">Text</a></li>
<li><a href="/tutorial-html/lesson-4">List</a></li>
<li><a href="/tutorial-html/lesson-5">Links</a></li>
<li className="current-link">Images</li>
<li><a href="/tutorial-html/lesson-7">Tables</a></li>
<li><a href="/tutorial-html/lesson-8">Forms</a></li>
<li><a href="/tutorial-html/lesson-9">Markups</a></li>
<li><a href="/tutorial-html/lesson-10">Flash Movies</a></li>
<li><a href="/tutorial-html/lesson-11">Final Page</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>IMAGES</h4>
<p>Lets get on to doing some images. We will be using the <i className="fa fa-chevron-left"></i>img src="" alt=""<i className="fa fa-chevron-right"></i> tag src stands for source where you getting it from just like the href. And alt is for what happens if the image is moved and/or cant work. The picture has to be found from the C: and go through each folder </p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>And sometimes we could links instead of downloading it you can put a url.</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>Now we are going to fix the the height and width of the pictures. Just add before we finish the tag say width="" and do same with height </p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>Or you could add a border to the images.</p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p>Now we will learn image mapping. Meaning we will learn how to put links on images. So in the example you can click the icon and the flower to be sent to another web page. You will be working with coords which means coordinates. The first number is the top coordinates, the second is the right coordinates, third is the bottom coordinates, and last is the left coordinates. Think of it like a xy axis. just ploting points on the image.</p>
<p><img src={HTMLImgE} alt="tutorial"/></p>
<p>That it for images here.</p>
<h4>Summary</h4>
<ul className="BulletPoints">
<li>The element is used to add images to a web page.</li>
<li>You must always specify a src attribute to indicate the source of an image and an alt attribute to describe the content of an image.</li>
<li>You should save images at the size you will be using them on the web page and in the appropriate format.</li>
<li>Photographs are best saved as JPEGs; illustrations or logos that use flat colors are better saved as GIFs.</li>
</ul>
<p className="bg-cs lft">
<a href="/tutorial-html/lesson-7" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage6
