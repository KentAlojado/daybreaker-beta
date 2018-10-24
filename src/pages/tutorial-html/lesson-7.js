import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/page-7-1.png";
import HTMLImgB from "../../images/page-7-2.png";
import HTMLImgC from "../../images/page-7-3.png";
import HTMLImgD from "../../images/page-7-4.png";
import HTMLImgE from "../../images/page-7-5.png";
import HTMLImgF from "../../images/page-7-6.png";
import HTMLImgG from "../../images/page-7-7.png";
import "font-awesome/css/font-awesome.min.css";
const TutorialHTMLPage7 = () => (
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
<li className="current-link">Tables</li>
<li><a href="/tutorial-html/lesson-8">Forms</a></li>
<li><a href="/tutorial-html/lesson-9">Markups</a></li>
<li><a href="/tutorial-html/lesson-10">Flash Movies</a></li>
<li><a href="/tutorial-html/lesson-11">Final Page</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>TABLES</h4>
<p>We will learn how to make tables in html. First we make a table tag, and tr tags meaning table rows. Then inside the table rows we have the td tag with mean table data.</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>Next we will learn about the scope. The scope allows you to to bold the item. Showing off the table head.</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>Next we will colspan aka column span. This will allow you to expand it into multiple columns.</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p>Then we will do the rowspan which is actually want to says row span. It is the same as column span but with rows instead.</p>
<p><img src={HTMLImgD} alt="tutorial"/></p>
<p>Now that you can make a simple table we will make one with a head and a foot. called thead table head, tbody being the body and lastly the tfoot the table's foot.</p> 
<p><img src={HTMLImgE} alt="tutorial"/></p>
<p><img src={HTMLImgF} alt="tutorial"/></p>
<p>Now time to test your knowlegde.</p>
<p><img src={HTMLImgG} alt="tutorial"/></p>
<h4>Summary</h4>
<ul className="BulletPoints">
<li>The  element is used to add tables to a webpage.</li>
<li>A table is drawn out row by row. Each row is created with the <i className="fa fa-chevron-left"></i>tr<i className="fa fa-chevron-right"></i> element.</li>
<li>Inside each row there are a number of cells represented by the <i className="fa fa-chevron-left"></i>td<i className="fa fa-chevron-right"></i> element (or <i className="fa fa-chevron-left"></i>th<i className="fa fa-chevron-right"></i> if it is a header).</li>
<li>You can make cells of a table span more than one row or column using the rowspan and colspan attributes.</li>
</ul>
<p className="bg-cs lft">
<a href="/tutorial-html/lesson-8">NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialHTMLPage7
