import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/jscript-6-1.jpg";
import HTMLImgB from "../../images/jscript-6-2.jpg";
import HTMLImgC from "../../images/jscript-6-3.jpg";
import HTMLImgD from "../../images/jscript-6-4.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialJScriptPage6 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-javascript/lesson-1">Introduction to JavaScript</a></li>
<li><a href="/tutorial-javascript/lesson-2">Let’s Learn JavaScript</a></li>
<li><a href="/tutorial-javascript/lesson-3">JavaScript Placement</a></li>
<li><a href="/tutorial-javascript/lesson-4">Syntax</a></li>
<li><a href="/tutorial-javascript/lesson-5">Variables</a></li>
<li className="current-link">Arrays</li>
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
<h4>Arrays</h4>
<p><b>Declaring and Instantiating an Array</b><br/>An array is a special type of variable. It doesn't just store one value; it stores a list of values. You should consider using an array whenever you are working with a list or a set of values that are related to each other. For example, an array can be suited to storing the individual items on a shopping list because it is a list of related items.</p>
<p>Use the following syntax to create an Array:<br/>
<img src={HTMLImgA} alt="tutorial"/></p>
<p><b>Accessing and Changing Array Items</b><br/>Each item in an array is automatically given a number called an index. This can be used to access specific items in the array. Confusingly, index values start at 0 (not 1).</p>
<p>To retrieve the third item on the list, the array name is specified along with the index number in square brackets:<br/>
<img src={HTMLImgB} alt="tutorial"/></p>
<p>Here you can see a variable called itemThree is declared. Its value is set to be the third color from the colors array.</p>
<p>You can change the value of an item an array by selecting it and assigning it a new value using the equals sign and the new value for that item:<br/>
<img src={HTMLImgC} alt="tutorial"/></p>
<p>The third item on the list is changed from 'custom' to 'beige'.</p>
<p><b>Array Length</b><br/>
Each array has a property called length, which holds the number of items in the array. The name of the array is followed by a period symbol which is then followed by the 1ength keyword.<br/>
<img src={HTMLImgD} alt="tutorial"/></p>
<p>You can see that a variable called numColors is declared. Its value is set to be the number of the items in the array.</p>
<p className="bg-cs lft">
<a href="/tutorial-javascript/lesson-7" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialJScriptPage6
