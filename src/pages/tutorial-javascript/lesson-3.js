import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import "font-awesome/css/font-awesome.min.css";
import HTMLImgA from "../../images/jscript-3-1.jpg";
import HTMLImgB from "../../images/jscript-3-2.jpg";
import HTMLImgC from "../../images/jscript-3-3.jpg";
import HTMLImgD from "../../images/jscript-3-4.jpg";
import HTMLImgE from "../../images/jscript-3-5.jpg";
const TutorialJScriptPage3 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-javascript/lesson-1">Introduction to JavaScript</a></li>
<li><a href="/tutorial-javascript/lesson-2">Let’s Learn JavaScript</a></li>
<li className="current-link">JavaScript Placement</li>
<li><a href="/tutorial-javascript/lesson-4">Syntax</a></li>
<li><a href="/tutorial-javascript/lesson-5">Variables</a></li>
<li><a href="/tutorial-javascript/lesson-6">Arrays</a></li>
<li><a href="/tutorial-javascript/lesson-7">Operators</a></li>
<li><a href="/tutorial-javascript/lesson-8">If Statements</a></li>
<li><a href="/tutorial-javascript/lesson-9">While Loop</a></li>
<li><a href="/tutorial-javascript/lesson-10">For Loop</a></li>
<li><a href="/tutorial-javascript/lesson-11">Functions</a></li>
<li><a href="/tutorial-javascript/lesson-12">Events</a></li>
<li><a href="/tutorial-javascript/lesson-13">DOM</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>JavaScript Placement</h4>
<p>JavaScript is written in plain text, just like HTML and CSS, so you do not need any new tools to write a script. When you want to use JavaScript with a web page, you use the HTML <i className="fa fa-chevron-left"></i>script<i className="fa fa-chevron-right"></i> element to tell the browser it is coming across a script. Even though there is enough flexibility to include JavaScript anywhere in a HTML file, There are four preferred ways to include JavaScript:</p>
<p><i><b>Note:</b> Don't worry about what the code means. We will focus on how the script is created and how it fits with an HTML page in different cases.</i></p>
<p><b>JavaScript in <i className="fa fa-chevron-left"></i>head<i className="fa fa-chevron-right"></i>...<i className="fa fa-chevron-left"></i>/head<i className="fa fa-chevron-right"></i> section of HTML</b><br/>
<img src={HTMLImgA} alt="tutorial"/></p>
<p><b>JavaScript in <i className="fa fa-chevron-left"></i>body<i className="fa fa-chevron-right"></i>...<i className="fa fa-chevron-left"></i>/body<i className="fa fa-chevron-right"></i> section of HTML</b><br/>
<img src={HTMLImgB} alt="tutorial"/></p>
<p><b>JavaScript in <i className="fa fa-chevron-left"></i>head<i className="fa fa-chevron-right"></i>...<i className="fa fa-chevron-left"></i>/head<i className="fa fa-chevron-right"></i> and <i className="fa fa-chevron-left"></i>body<i className="fa fa-chevron-right"></i>...<i className="fa fa-chevron-left"></i>/body<i className="fa fa-chevron-right"></i> section of HTML</b><br/>
<img src={HTMLImgC} alt="tutorial"/></p>
<p><b>JavaScript in an external file and include it in <i className="fa fa-chevron-left"></i>head<i className="fa fa-chevron-right"></i> and/or <i className="fa fa-chevron-left"></i>body<i className="fa fa-chevron-right"></i></b><br/>A JavaScript file is just a text file (like HTML and CSS files are) but it has a .js file extension (filename.js). The HTML script element is used to load the JavaScript file into the page. It has an attribute called src, whose value is the path to the script you created. This tells the browser to find and load the script file.</p>
<p><b>HTML:</b><br/>
<img src={HTMLImgD} alt="tutorial"/></p>
<p><b>Javascript (filename.js):</b><br/>
<img src={HTMLImgE} alt="tutorial"/></p>
<p>To keep the files organized, all of your JavaScript files should be in a separate folder. It is best practice to keep JavaScript in a seprate file because more complex web development would require you to reuse identical JavaScript code on multiple pages of a site. Hence, this tutorial will follow the same convention.</p>
<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-4" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage3
