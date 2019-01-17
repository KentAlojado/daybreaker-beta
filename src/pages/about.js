import React from 'react'
import styled from 'styled-components';
import "font-awesome/css/font-awesome.min.css";
import '../components/fonts/fonts.css';
import Banner from '../components/banner-about';
import Layout from '../components/layout';
import SliderWidget from '../components/slider';
import RoadmapIMG from "../images/bg-roadmap.jpg";
import CoreV from "../images/about-our-core-values.png";
import Mischief from "../images/more-mischief.png";
import MischiefIMGA from "../images/mischief.png";
import MischiefIMGB from "../images/mischief-a.png";
import MischiefIMGC from "../images/mischief-b.png";
import JoinUs from "../images/join-us.png";
import AboutA from "../images/about-a.jpg";
import AboutT from "../images/about-our-team.png";
import DoseT from "../images/db_dose_title.png";
import DoseTM from "../images/dose_tm.png";
import BringCity from "../images/dose-h.png";
import TeamS from "../images/team-s.gif";
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
const AboutPage = () => (
  <Layout>
  <Banner />
  <div className="wrapping home center about">
<p>Daybreaker is an early morning dance movement in 25 cities around the world and growing. We start with a one hour yoga + fitness experience and then dance with reckless abandon for two hours before work.</p>
<p><img src={AboutA} alt="About A"/></p>
<p>You never know where our next location will be and what surprises are in store. We don't need alcohol. We don't need to pretend to be someone else. We come as we are to sweat, dance and connect with ourselves and each other. See you on the dance floor.</p>
</div>
<div className="wrapping home center">
<h2 className="BigButton"><a href="/world" className="bg-cs rm-sec">ARE YOU IN?</a></h2>
<img src={CoreV} alt="Core Values"/>
<ColThreeContainer>
<div className="ColFive one">
<div className="floating-text">
<p className="f-container"><p>Sweat Eat and Drink with Intention</p></p>
</div>
<span className="sub-txt">wellness</span>
</div>
<div className="ColFive two">
<div className="floating-text">
<p className="f-container"><p>Open your heart and connect with people</p></p>
</div>
<span className="sub-txt">camaraderie</span>
</div>
<div className="ColFive three">
<div className="floating-text">
<p className="f-container"><p>Be your gloriously unabashed self</p></p>
</div>
<span className="sub-txt">self-expression</span>
</div>
<div className="ColFive four">
<div className="floating-text">
<p className="f-container"><p>Be Here Now</p></p>
</div>
<span className="sub-txt">mindfulness</span>
</div>
<div className="ColFive five">
<div className="floating-text">
<p className="f-container"><p>Break the rules<br/>with love</p></p>
</div>
<span className="sub-txt">mischief</span>
</div>
</ColThreeContainer>
</div>	
<div className="wrapping home center about">
<p><img src={AboutT} alt="Our Team"/></p>
<p>MEET OUR HQ TEAM WHO MAKES THE MISCHIEF POSSIBLE ALL AROUND THE WORLD.</p>
<p><img src={TeamS} alt="Team"/></p>
<p>MEET OUR AMAZING TEAM MEMBERS IN YOUR <a href="#">CITY HERE</a></p>
</div>
<div className="wrapping home center about">
<p><img src={DoseT} alt="DOSE"/></p>
<p>Dancing is downright scientific. What is it about the Daybreaker experience that keeps us so energized and happy throughout our day? Turns out dancing sober in community in the morning releases your brain's natural "happy chemicals." We call this quartet of chemicals the Daybreaker D.O.S.E.: <span className="green-this">Dopamine</span>, <span className="green-this">Oxytocin</span>, <span className="green-this">Serotonin</span>, <span className="green-this">Endorphins</span>.</p>
<p><img src={DoseTM} alt="DOSE"/></p>
<p className="left-this"><span className="green-this">Dopamine</span> is a neurotransmitter that helps control the brain's reward and pleasure centers. It motivates you to take action toward your goals and gives you a surge of reinforcing pleasure when you achieve each goal. At Daybreaker, you have to set your alarm and wake up before the sun comes up. This offers a deep feeling of accomplishment. While most everyone is sleeping, you're up and dancing.</p>
<p className="left-this"><span className="green-this">Oxytocin</span> is often referred to as "the cuddle hormone." When hugging or kissing a loved one, oxytocin levels increase. At Daybreaker, a hugging committee greets party-goers with a genuine hug upon arrival that triggers oxytocin. This release creates intimacy and trust and strengthens relationships. Later, while community members dance, they're often holding hands and experiencing hundreds of people around them, moving together - all means for more happy chemicals.</p>
<p className="left-this"><span className="green-this">Serotonin</span>, the brain chemical crucial to mood and motivation, also shapes personality to make you susceptible to spiritual experiences. Serotonin flows when you feel significant or important. At Daybreaker, the DJ's we select play positive, upbeat and joyful music, and our MCs facilitate transformational experiences for people who have never danced sober in the morning before!</p>
<p className="left-this"><span className="green-this">Endorphins</span> are morphine-like chemicals released from the pituitary gland that help diminish pain and trigger positive feelings. They'll release in times of stress, pain, orgasm and with strenuous exercise. A "second wind" or the euphoric "runner's high" are both the result of endorphins. At Daybreaker, you get to dance for two hours straight. Add in the hour-long yoga + fitness experience, and you're burning upwards of 1000 calories in one Daybreaker morning!</p> 
</div>
<StepSec>
<div className="wrapping home center">
<img src={BringCity} alt="Mischief Campus"/>
<h2><a href="#" className="bg-cs rm-sec">SEE YOU ON THE DANCE FLOOR</a></h2>
</div>
</StepSec>
<div className="Evnt-Soc">
<div className="wrapping home center mschief">
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

export default AboutPage
