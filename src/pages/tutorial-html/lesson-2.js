import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/page-2-1.png";
import HTMLImgB from "../../images/page-2-2.png";
import HTMLImgC from "../../images/page-2-3.png";
import HTMLImgD from "../../images/page-2-4.png";
import "font-awesome/css/font-awesome.min.css";
const TutorialHTMLPage2 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-html" >Introduction to HTML</a></li>
<li className="current-link">Let’s Learn HTML</li>
<li><a href="/tutorial-html/lesson-3">Text</a></li>
<li><a href="/tutorial-html/lesson-4">List</a></li>
<li><a href="/tutorial-html/lesson-5">Links</a></li>
<li><a href="/tutorial-html/lesson-6">Images</a></li>
<li><a href="/tutorial-html/lesson-7">Tables</a></li>
<li><a href="/tutorial-html/lesson-8">Forms</a></li>
<li><a href="/tutorial-html/lesson-9">Markups</a></li>
<li><a href="/tutorial-html/lesson-10">Flash Movies</a></li>
<li><a href="/tutorial-html/lesson-11">Final Page</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Let's Learn HTML</h4>
<p>Okay lets Start.
html is not hard to get into. It is simple each part is controled by a tag. A tag is what is inside a lesser and greater than symbol. A tag is like a bottle. <i className="fa fa-chevron-left"></i> tag <i className="fa fa-chevron-right"></i> is like a cap. And <i className="fa fa-chevron-left"></i> /tag  <i className="fa fa-chevron-right"></i> is like the bottle.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>It starts with a <i className="fa fa-chevron-left"></i> html <i className="fa fa-chevron-right"></i> tag. These must be at the top and bottom of the code. Click the picture to see what the webpage should look like.</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>
This is an example of what you will learn in the first chapter 1.
First, open your text editor and start a new file. Name it, something.html. Make sure it says .html it needs the .html extensions to work. Then on the first line write the <i className="fa fa-chevron-left"></i> html <i className="fa fa-chevron-right"></i> tag. The opening on the first line and the closing on the 2nd line. Next, go to the first line and hit Enter. This will make the third line. Write a <i className="fa fa-chevron-left"></i> head <i className="fa fa-chevron-right"></i> tag like the <i className="fa fa-chevron-left"></i> html <i className="fa fa-chevron-right"></i>. Then once again on the top <i className="fa fa-chevron-left"></i> head <i className="fa fa-chevron-right"></i> hit Enter. So we can make a <i className="fa fa-chevron-left"></i> title <i className="fa fa-chevron-right"></i> tag, this is the name of the web page. Under the head closing tag make a <i className="fa fa-chevron-left"></i> body <i className="fa fa-chevron-right"></i> tag.As before after this, we will Enter after the body tag. We will be making a heading tag (<i className="fa fa-chevron-left"></i> h1 <i className="fa fa-chevron-right"></i>). Heading tag goes from one to six. One being the biggest, six being the smallest.<br/>And lastly for the page we want to make is a <i className="fa fa-chevron-left"></i> p <i className="fa fa-chevron-right"></i> tag. It will allow us to make paragraphs on the screen. 
</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>Now we'll learn about the last part of Chapter 1. How to break a page and make space on the page. The <i className="fa fa-chevron-left"></i> br <i className="fa fa-chevron-right"></i> tag! This one is special this one doesn't need a closing tag. you can just write it by itself and it will be done. </p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<h4>Summary</h4>
<ul className="BulletPoints">
<li>HTML pages are text documents.</li>
<li>HTML uses tags (characters that sit inside angled brackets) to give the information they surround special meaning.</li>
<li>Tags are often referred to as elements</li>
<li>Tags usually come in pairs. The opening tag denotes the start of a piece of content; the closing tag denotes the end.</li>
<li>Opening tags can carry attributes, which tell us more about the content of that element.</li>
<li>Attributes require a name and a value</li>
<li>To learn HTML you need to know what tags are available for you to use, what they do, and where they can go.</li>
</ul>
<p className="bg-cs lft">
<a href="/tutorial-html/lesson-3" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage2
