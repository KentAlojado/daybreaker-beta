import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/page-8-1.png";
import HTMLImgB from "../../images/page-8-2.png";
import HTMLImgC from "../../images/page-8-3.png";
import HTMLImgD from "../../images/page-8-4.png";
import HTMLImgE from "../../images/page-8-5.png";
import HTMLImgF from "../../images/page-8-6.png";
import HTMLImgG from "../../images/page-8-7.png";
import HTMLImgH from "../../images/page-8-8.png";
import HTMLImgI from "../../images/page-8-9.png";
import HTMLImgJ from "../../images/page-8-10.png";
import HTMLImgK from "../../images/page-8-11.png";
import HTMLImgL from "../../images/page-8-12.png";
import HTMLImgM from "../../images/page-8-13.png";
import HTMLImgN from "../../images/page-8-14.png";
import HTMLImgO from "../../images/page-8-15.png";
import HTMLImgP from "../../images/page-8-16.png";
import "font-awesome/css/font-awesome.min.css";
const TutorialHTMLPage8 = () => (
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
<li className="current-link">Forms</li>
<li><a href="/tutorial-html/lesson-9">Markups</a></li>
<li><a href="/tutorial-html/lesson-10">Flash Movies</a></li>
<li><a href="/tutorial-html/lesson-11">Final Page</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>FORMS</h4>
<p>Now we are going to work with the form. Forms are different types of input elements, like text fields, checkboxes, radio buttons, submit buttons, and more. First we will tell the form where to go.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>Then we will make a text input box for the website.</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>Next is the a password box.</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>Now let's make a comment box.</p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p>Then we start with radio buttons. These are the bubble buttons you see on websites.</p>
<p><img src={HTMLImgE} alt="tutorial"/></p>
<p>Now we will make check boxes.</p>
<p><img src={HTMLImgF} alt="tutorial"/></p>
<p>Then drop down list.</p>
<p><img src={HTMLImgG} alt="tutorial"/></p>
<p>Next we can learn how to make mp3 file upload boxes.</p>
<p><img src={HTMLImgH} alt="tutorial"/></p>
<p>Next we can do a email Subscribe button.</p>
<p><img src={HTMLImgI} alt="tutorial"/></p>
<p>You should also learn how to make a Labeling form.</p>
<p><img src={HTMLImgJ} alt="tutorial"/></p>
<p>A very important part of a login is the required portions. So we should learn how to do that.</p>
<p><img src={HTMLImgK} alt="tutorial"/></p>
<p>A month and date form is next.</p>
<p><img src={HTMLImgL} alt="tutorial"/></p>
<p>We should also do a Url required input.</p>
<p><img src={HTMLImgM} alt="tutorial"/></p>
<p>Now for this Chapters final challenge.</p>
<p><img src={HTMLImgN} alt="tutorial"/></p>
<p><img src={HTMLImgO} alt="tutorial"/></p>
<p><img src={HTMLImgP} alt="tutorial"/></p>
<h4>Summary</h4>
<ul className="BulletPoints">
<li>Whenever you want to collect information from visitors you will need a form, which lives inside an element.</li>
<li>Information from a form is sent in name/value pairs.</li>
<li>Each form control is given a name, and the text the user types in or the values of the options they select are sent to the server.</li>
<li>HTML5 introduces new form elements which make it easier for visitors to fill in forms.</li>
</ul>
<p className="bg-cs lft">
<a href="/tutorial-html/lesson-9" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage8
