import React from 'react'
import styled from 'styled-components';
import "font-awesome/css/font-awesome.min.css";
import '../components/fonts/fonts.css';
import Banner from '../components/banner-about';
import Layout from '../components/layout';
import SliderWidget from '../components/slider';
import RoadmapIMG from "../images/bg-roadmap.jpg";
import MMHEAD from "../images/mm-head.png";
import MischiefIMGC from "../images/kombucha.jpg";
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
const MischiefPage = () => (
  <Layout>
<div className="wrapping home center">
<img src={MMHEAD} alt="img" />
<ColThreeContainer>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
Merging artificial intelligence and a human dance party.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
The collective energy on the dance floor measured by Gear Fit 2 unlocked surprises.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
9 story Daybreaker take over of Macy's flagship department store in New York City.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
</ColThreeContainer>

<ColThreeContainer>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
Merging artificial intelligence and a human dance party.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
The collective energy on the dance floor measured by Gear Fit 2 unlocked surprises.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
9 story Daybreaker take over of Macy's flagship department store in New York City.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
</ColThreeContainer>

<ColThreeContainer>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
Merging artificial intelligence and a human dance party.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
The collective energy on the dance floor measured by Gear Fit 2 unlocked surprises.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
9 story Daybreaker take over of Macy's flagship department store in New York City.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
</ColThreeContainer>

<ColThreeContainer>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
Merging artificial intelligence and a human dance party.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
The collective energy on the dance floor measured by Gear Fit 2 unlocked surprises.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={MischiefIMGC} alt="img" />
<h3>TITLE GOES HERE</h3>
9 story Daybreaker take over of Macy's flagship department store in New York City.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Read More</a>
</p>
</div>
</ColThreeContainer>

</div>

<div className="wrapping home center about">
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

export default MischiefPage
