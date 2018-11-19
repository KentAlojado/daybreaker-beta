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
import BuzzIMG from "../images/buzz.png";
import FastComIMG from "../images/fastcom.png";
import GQIMG from "../images/gq.png";
import NBCIMG from "../images/nbc.png";
import MashableIMG from "../images/mashable.png";
import JoinUs from "../images/join-us.png";
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
<div className="ColFive">
<img src={NBCIMG} alt="NBC"/><br/>
"Parties like Daybreaker really show how much fun you can have sober."
</div>
<div className="ColFive">
<img src={BuzzIMG} alt="NBC"/><br/>
"Do I need coffee? No, I'm going to be energized by dance!"
</div>
<div className="ColFive">
<img src={MashableIMG} alt="NBC"/><br/>
"What makes Daybreaker unique is its curation of live entertainment."
</div>
<div className="ColFive">
<img src={FastComIMG} alt="NBC"/><br/>
"Doing something strange together can change team and creative dynamics in a really positive way."
</div>
<div className="ColFive">
<img src={GQIMG} alt="NBC"/><br/>
"Welcome to the world of morning raves: just a super-awesome start to your day."
</div>
</ColThreeContainer>
</div>	
<div className="wrapping home center">
<img src={JoinUs} alt="Join Us"/><br/>
<b>UNLOCK SECRET INVITES & OUR WEEKLY ROUNDUP OF GLOBAL MISCHIEF</b>
<form className="frm-sec">
<select name="g" id="ui-id-7">
<option value="nEwkgi">Stockholm</option>
<option value="ivWh8w">Berlin</option>
<option value="iL5tPH">Tel Aviv</option>
<option value="hKx8sL">Dubai</option>
<option value="iFPXTb">Lisbon</option>
<option value="qMJLNS">Mexico City</option>
<option value="xbL83W">Barcelona</option>
<option value="zFms3E">New Orleans</option>
<option value="F5Dvax">Kansas City</option>
<option value="zjthg7">Dublin</option>
<option value="ANpN2S">Melbourne</option>
<option value="CW5BWT">Detroit</option>
<option value="D4LXrW">Houston</option>
<option value="FJApqa">Phoenix</option>
<option value="Fb8pxB">Minneapolis</option>
<option value="ivFwaJ">Mumbai</option>
<option value="kBsEQw">Istanbul</option>
<option value="ngshk7">Portland</option>
<option value="tmV48S">Dallas</option>
<option value="QqF2DX">Brussels</option>
<option value="KrrZte">Baltimore</option>
<option value="PWdH9u">Oslo</option>
<option value="kBDncF">Boston</option>
<option value="iNXRuA">Toronto</option>
<option value="qhBYXd">Philadelphia</option>
<option value="j6mPUA">New York</option>
<option value="qPHNU9">Chicago</option>
<option value="pD4UeU">Atlanta</option>
<option value="KSzpZ5">Columbus</option>
<option value="hJzbfB">Washington DC</option>
<option value="mS9d8v">Vancouver</option>
<option value="n88wMC">Seattle</option>
<option value="rrKQsf">Nashville</option>
<option value="psydfD">Montreal</option>
<option value="uVspNT">Boulder</option>
<option value="isnvHs">Denver</option>
<option value="qt3nvZ">Miami</option>
<option value="npFeQW">San Francisco</option>
<option value="isitjg">Austin</option>
<option value="nyL6Ug">Los Angeles</option>
<option value="uVXRfS">San Diego</option>
<option value="LbBqDk">Buenos Aires</option>
<option value="hHMLaW">Amsterdam</option>
<option value="hFmmsy">London</option>
<option value="nXpaZ4">Paris</option>
<option value="kLM8q8">Sydney</option>
<option value="quZdza">Tokyo</option>
<option value="ii4ntX">Shanghai</option>
<option value="nZZRuy">Hong Kong</option>
</select>
<input type="email" placeholder="youremail@domain.com"/>
<input className="bg-cs" type="submit" value="Join Now"/>
</form>
</div>
  </Layout>
)

export default IndexPage
