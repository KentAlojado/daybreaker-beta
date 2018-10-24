import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/page-3-1.png";
import HTMLImgB from "../../images/page-3-2.png";
import HTMLImgC from "../../images/page-3-3.png";
import HTMLImgD from "../../images/page-3-4.png";
import HTMLImgE from "../../images/page-3-5.png";
import HTMLImgF from "../../images/page-3-6.png";
import "font-awesome/css/font-awesome.min.css";
const TutorialHTMLPage3 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-html">Introduction to HTML</a></li>
<li><a href="/tutorial-html/lesson-2">Let’s Learn HTML</a></li>
<li className="current-link">Text</li>
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
<h4>TEXT</h4>
<p>So we are going to start with the basics of text on html. We will first learn how to Bold text. We do this by using the <i className="fa fa-chevron-left"></i> b <i className="fa fa-chevron-right"></i> tag. </p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>
Then we can learn about learn about <i>Italicizing</i> text.
</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>White Spacing is next. White spacing is any section of a document that is unused or space around an object. White spaces help separate paragraphs of text, graphics, and other portions of a document, and helps a document look less crowded. Using white space effectively in a document keeps the reader reading the document and helps the reader quickly find what they are interested in reading.</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>Citing is next. Citing is quoting (a passage, book, or author) as evidence for or justification of an argument or statement, especially in a scholarly work. Citing is done by <i className="fa fa-chevron-left"></i> blockquote cite="" <i className="fa fa-chevron-right"></i> </p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p>Strikethrough is just putting a line through some text. This is done by <i className="fa fa-chevron-left"></i> s <i className="fa fa-chevron-right"></i> <i className="fa fa-chevron-left"></i> /s <i className="fa fa-chevron-right"></i>.</p>
<p><img src={HTMLImgE} alt="tutorial"/></p>
<p>And here is practice for what you just did.</p>
<p><img src={HTMLImgF} alt="tutorial"/></p>
<h4>Summary</h4>
<ul className="BulletPoints">
<li>HTML elements are used to describe the structure of the page (e.g. headings, subheadings, paragraphs).</li>
<li>They also provide semantic information (e.g. where emphasis should be placed, the definition of any acronyms used, when given text is a quotation).</li>
</ul>
<p className="bg-cs lft">
<a href="/tutorial-html/lesson-4" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage3
