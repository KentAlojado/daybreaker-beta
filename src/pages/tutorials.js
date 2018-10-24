import React from "react";
import HtmlIMG from "../images/html-img.jpg";
import CssIMG from "../images/css-img.jpg";
import JsIMG from "../images/js-img.jpg";
import AngularIMG from "../images/angular.jpg";
import ReactIMG from "../images/reactjs.jpg";
import MeteorIMG from "../images/meteor.jpg";
import styled from 'styled-components';
import Layout from '../components/layout';
const ColThreeContainer = styled.div`
clear:all;overflow:auto;
`
const TutorialPage = () => (
<Layout>
<div className="wrapping home center">
<ColThreeContainer>
<div className="ColThree">
<img src={HtmlIMG} alt="HTML 5"/>
<h3>HTML 5</h3>
<p className="leading-loose">
Hypertext Markup Language, a standardized system for tagging text files to achieve font color, graphic, and hyperlink effects on Web pages.
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
<div className="ColThree">
<img src={CssIMG} alt="CSS 3"/>
<h3>CSS 3</h3>
<p className="leading-loose">
CSS gives more control over the appearance of a web page to the page creator than to the browser designer or the viewer. 
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
<div className="ColThree">
<img src={JsIMG} alt="Javascript"/>
<h3>Javascript</h3>
<p className="leading-loose">
An object-oriented computer programming language commonly used to creat interactive effects within web browsers.
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
</ColThreeContainer>
<ColThreeContainer>
<div className="ColThree">
<img src={AngularIMG} alt="Angular"/>
<h3>Angular</h3>
<p className="leading-loose">
A structural framework for dynamic web apps.
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
<div className="ColThree">
<img src={MeteorIMG} alt="Meteor"/>
<h3>Meteor</h3>
<p className="leading-loose">
JavaScript web framework written using Node.js.
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
<div className="ColThree">
<img src={ReactIMG} alt="ReactJS"/>
<h3>React</h3>
<p className="leading-loose">
JavaScript library for building user interfaces.
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
</ColThreeContainer>
</div>
</Layout>
);
export default TutorialPage;
