import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/page-10-1.png";
import HTMLImgB from "../../images/page-10-2.png";
import HTMLImgC from "../../images/page-10-3.png";
import HTMLImgD from "../../images/page-10-4.png";
import HTMLImgE from "../../images/page-10-5.png";
import HTMLImgF from "../../images/page-10-6.png";
import "font-awesome/css/font-awesome.min.css";
const TutorialHTMLPage10 = () => (
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
<li><a href="/tutorial-html/lesson-6">Images</a></li>
<li><a href="/tutorial-html/lesson-7">Tables</a></li>
<li><a href="/tutorial-html/lesson-8">Forms</a></li>
<li><a href="/tutorial-html/lesson-9">Markups</a></li>
<li className="current-link">Flash Movies</li>
<li><a href="/tutorial-html/lesson-11">Final Page</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>FLASH MOVIES</h4>
<p>It is finally the end. We are nearing the end.
We will be learning how to add flash movies to or web page.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>Next we will learn how the make different sources in case you don't want to use mp4 or have backup files.</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>Now we will do the same with Mp3 files.</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>Now we are going to link youtube video. You would find a youtube video. And replace the watch?v= with embed/.</p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p>To make the the YouTube video auto play. We just add ?autoplay=1 to the end of the fix link.</p>
<p><img src={HTMLImgE} alt="tutorial"/></p>
<p>Now instead of ?autoplay=1 put ?playlist='#'&loop=1, and if you don't want to loop it just don't add the &loop=1
Six 9-Youtube3</p>
<p><img src={HTMLImgF} alt="tutorial"/></p>
<h4>Summary</h4>
<ul className="BulletPoints">
<li>Flash allows you to add animations, video and audio to the web.</li>
<li>Flash is not supported on iPhone or iPad.</li>
<li>HTML5 introduces new <i className="fa fa-chevron-left"></i>video<i className="fa fa-chevron-right"></i> and <i className="fa fa-chevron-left"></i>audio<i className="fa fa-chevron-right"></i> elements for adding video and audio to web pages, but these are only supported in the latest browsers.</li>
<li>Browsers that support the HTML5 elements do not all support the same video and audio formats, so you need to supply your files in different formats to ensure that everyone can see/hear them.</li>
</ul>
<p className="bg-cs lft">
<a href="/tutorial-html/lesson-11" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage10
