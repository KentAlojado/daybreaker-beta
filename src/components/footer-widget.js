import React from "react";
import styled from "styled-components";
import JordanIMG from "../images/jordan.jpg";
import JudIMG from "../images/jud.jpg";
import NsIMG from "../images/newsletter.jpg";
const ColThreeContainer = styled.div`
clear:all;overflow:auto;
`
const FooterWidget = () => (
<div className="bg-light footer-widget-sec">
<div className="wrapping">
<ColThreeContainer>
<div className="ColThree">
<h3>Latest News</h3>
<ul className="FootBlog">
<li>
<h4>Title Goes Here</h4>
<img src={JordanIMG} alt="placeholder" width="90px" height="80"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit elit, tristique eget auctor vitae.
</li>
<li>
<h4>Title Goes Here</h4>
<img src={JordanIMG} alt="placeholder" width="90px" height="80"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit elit, tristique eget auctor vitae.
</li>
<li>
<h4>Title Goes Here</h4>
<img src={JordanIMG} alt="placeholder" width="90px" height="80"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit elit, tristique eget auctor vitae.
</li>
</ul>
</div>
<div className="ColThree">
<h3>Testimonials</h3>
<ul className="FootBlog">
<li>
<h4>Juhnson Jean-Baptiste</h4>
<img src={JudIMG} alt="placeholder" width="90px" height="80"/>
"If it weren't for this program I would not have known this was an opportunity for me."
</li>
<li>
<h4>Jordan Chestnut-McKnight</h4>
<img src={JordanIMG} alt="placeholder" width="90px" height="80"/>
"I would have only focused on art design if not for this program"
</li>
<li>
<h4>Title Goes Here</h4>
<img src={JordanIMG} alt="placeholder" width="90px" height="80"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit elit, tristique eget auctor vitae.
</li>
</ul>
</div>
<div className="ColThree">
<h3>Newsletter Signup</h3>
<img src={NsIMG} alt="ReactJS" width="374px" height="265"/>
<p className="leading-loose">
Let's build bridges that last. Time to code!
</p>
</div>
</ColThreeContainer>
</div>
</div>
);

export default FooterWidget;
