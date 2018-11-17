import React from 'react'
import styled from 'styled-components';
import "font-awesome/css/font-awesome.min.css";
import Banner from '../components/banner';
import Layout from '../components/layout';
import SliderWidget from '../components/slider';
import RoadmapIMG from "../images/bg-roadmap.jpg";
import EventsIMG from "../images/events.png";
import Mischief from "../images/more-mischief.png";
import MischiefIMGA from "../images/mischief.png";
import MischiefIMGB from "../images/mischief-a.png";
import MischiefIMGC from "../images/mischief-b.png";
import BringCity from "../images/city-img.png";
import NewsIMG from "../images/news.png";
const ColThreeContainer = styled.div`
clear:all;overflow:auto;margin:0 0 1rem;
`
const StepSec = styled.div`
clear:all;
background-image:url(${RoadmapIMG});
background-size:cover;
padding:3rem 0;
h2{margin-top:2rem;}
h2 a{padding:1rem 2.5rem;}
`
const IndexPage = () => (
  <Layout>
  <Banner />
  <div className="wrapping home center">

<h2 className="cheading">DAYBREAKER IS A MORNING DANCE PARTY THAT
WILL START YOUR DAY WITH ENERGY & INTENTION.</h2>
<div className="SliderCont">
<SliderWidget />
</div>
<img src={EventsIMG} alt="Events" width="" height=""/>
<ColThreeContainer>
<div className="ColThree">
<div className="evnt-bg new-york">
<p className="evnt-date">NOV<br/><span className="date-number-color">11</span><br/>SUN</p>
</div>
<div className="RmSec">
<div className="HdrSec">NEW YORK</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
<div className="ColThree">
<div className="evnt-bg sanf">
<p className="evnt-date">NOV<br/><span className="date-number-color">16</span><br/>FRI</p>
</div>
<div className="RmSec">
<div className="HdrSec">SAN FRANCISCO</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
<div className="ColThree">
<div className="evnt-bg miami">
<p className="evnt-date">NOV<br/><span className="date-number-color">17</span><br/>SAT</p>
</div>
<div className="RmSec">
<div className="HdrSec">MIAMI</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
</ColThreeContainer>
<ColThreeContainer>
<div className="ColThree">
<div className="evnt-bg new-york">
<p className="evnt-date">NOV<br/><span className="date-number-color">22</span><br/>THU</p>
</div>
<div className="RmSec">
<div className="HdrSec">BUENOS AIRES</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
<div className="ColThree">
<div className="evnt-bg sanf">
<p className="evnt-date">NOV<br/><span className="date-number-color">28</span><br/>WED</p>
</div>
<div className="RmSec">
<div className="HdrSec">SEATTLE</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
<div className="ColThree">
<div className="evnt-bg miami">
<p className="evnt-date">NOV<br/><span className="date-number-color">30</span><br/>FRI</p>
</div>
<div className="RmSec">
<div className="HdrSec">NEW YORK</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
</ColThreeContainer>
</div>
<div className="Evnt-Soc">
<div className="wrapping home center">
<h2 className="BigButton"><a href="#" className="bg-cs rm-sec">FIND EVENTS IN YOUR CITY</a></h2>
<img src={Mischief} alt="More Mischief"/>
<ColThreeContainer>
<div className="ColThree">
<img src={MischiefIMGA} alt="Mischief Campus"/>
<h3>Campus</h3>
A new way to party, connect and sweat on campus. 
<p className="mischief-cs"><a className="bg-cs rm-sec" href="/campus">Read More</a></p>
</div>
<div className="ColThree">
<img src={MischiefIMGB} alt="Mischief Live With Us"/>
<h3>LIVE IT UP</h3>
A 12-month program to be healthier, happier and more successful. 
<p className="mischief-cs"><a className="bg-cs rm-sec" href="https://goliveitup.com/" target="_blank">Read More</a></p>
</div>
<div className="ColThree">
<img src={MischiefIMGC} alt="Mischief"/>
<h3>Partner with us</h3>
We partner with epic brands to design unforgettable experiences. 
<p className="mischief-cs"><a className="bg-cs rm-sec" href="https://www.daybreaker.com/partners">Read More</a></p>
</div>
</ColThreeContainer>
</div>
</div>
<StepSec>
<div className="wrapping home center">
<img src={BringCity} alt="Mischief Campus"/>
<h2><a href="#" className="bg-cs rm-sec">START HERE</a></h2>
</div>
</StepSec>
<div className="wrapping home center">
<img src={NewsIMG} alt="Events" width="" height=""/>
<ColThreeContainer>
<div className="ColThree">
<div className="evnt-bg new-york">
<p className="evnt-date">NOV<br/><span className="date-number-color">11</span><br/>SUN</p>
</div>
<div className="RmSec">
<div className="HdrSec">NEW YORK</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
<div className="ColThree">
<div className="evnt-bg sanf">
<p className="evnt-date">NOV<br/><span className="date-number-color">16</span><br/>FRI</p>
</div>
<div className="RmSec">
<div className="HdrSec">SAN FRANCISCO</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
<div className="ColThree">
<div className="evnt-bg miami">
<p className="evnt-date">NOV<br/><span className="date-number-color">17</span><br/>SAT</p>
</div>
<div className="RmSec">
<div className="HdrSec">MIAMI</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
</ColThreeContainer>
<ColThreeContainer>
<div className="ColThree">
<div className="evnt-bg new-york">
<p className="evnt-date">NOV<br/><span className="date-number-color">22</span><br/>THU</p>
</div>
<div className="RmSec">
<div className="HdrSec">BUENOS AIRES</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
<div className="ColThree">
<div className="evnt-bg sanf">
<p className="evnt-date">NOV<br/><span className="date-number-color">28</span><br/>WED</p>
</div>
<div className="RmSec">
<div className="HdrSec">SEATTLE</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
<div className="ColThree">
<div className="evnt-bg miami">
<p className="evnt-date">NOV<br/><span className="date-number-color">30</span><br/>FRI</p>
</div>
<div className="RmSec">
<div className="HdrSec">NEW YORK</div>
<div className="bg-cs">GET TIX</div>
</div>
</div>
</ColThreeContainer>
</div>	
  </Layout>
)

export default IndexPage
