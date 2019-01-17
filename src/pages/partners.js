import React from 'react'
import styled from 'styled-components';
import "font-awesome/css/font-awesome.min.css";
import '../components/fonts/fonts.css';
import Banner from '../components/banner-partner';
import Layout from '../components/layout';
import SliderWidget from '../components/slider';
import RoadmapIMG from "../images/bg-roadmap.jpg";
import CoreV from "../images/about-our-core-values.png";
import Mischief from "../images/more-mischief.png";
import JoinUs from "../images/join-us.png";
import AboutT from "../images/about-our-team.png";
import DoseT from "../images/db_dose_title.png";
import DoseTM from "../images/dose_tm.png";
import BringCity from "../images/dose-h.png";
import BostonIMG from "../images/boston.png";
import PartnerIMG from "../images/partner-logo.png";
import FCIMG from "../images/fc-logo.png";
import PartnerBIMG from "../images/partner-logo-2.jpg";
import NESPIMG from "../images/nesp.jpg";
import IBMIMG from "../images/ibm-watson.jpg";
import SamsungIMG from "../images/samsung.jpg";
import MacysIMG from "../images/macys.jpg";
import KomIMG from "../images/kombucha.jpg";
import SeedIMG from "../images/seedlip.jpg";
import ManitobaIMG from "../images/manitoba.jpg";
import CircIMG from "../images/dbrkcirc.jpg";
import BCIMG from "../images/belong-center.jpg";
import LabsIMG from "../images/icon-labs.png";
import TeamS from "../images/team-s.gif";
import IconA from "../images/green-icon.svg";
import IconB from "../images/babies-icon.svg";
import IconC from "../images/nobooze-icon.svg";
import IconD from "../images/icon_wob.svg";
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
const PartnersPage = () => (
  <Layout>
  <Banner />
  <div className="wrapping home center"></div>
<h1 className="centerized">We create unforgettable human experiences<br/>that inspire meaningful connection.</h1>
<ColThreeContainer>
<div className="ColThree partners col-a">
<div className="img-frame">
<p>WELLNESS</p>
</div>
</div>
<div className="ColThree partners col-b">
<div className="img-frame">
<p>DANCE</p>
</div>
</div>
<div className="ColThree partners col-c">
<div className="img-frame">
<p>COMMUNITY</p>
</div>
</div>
</ColThreeContainer>
<div className="wrapping home center about">
<h1 className="centerized">We Are Daybreaker</h1>
<p>Daybreaker is a global community of 500,000+ go-getters and tastemakers who actively seek new experiences. Our turn-key monthly events merge the worlds of nightlife and festivals with a lifestyle committed to health and wellness. We represent 25 major metropolitan cities in 11 countries and 4 continents around the world.</p>
<ColThreeContainer>
<div className="ColFour">
<img src={IconA} alt="Icon A"/><br/>
We Carbon Offset for Zero Emissions
</div>
<div className="ColFour">
<img src={IconB} alt="Icon B"/><br/>
Our community is Multigenerational
</div>
<div className="ColFour">
<img src={IconC} alt="Icon C"/><br/>
No Alcohol Served. Ever.
</div>
<div className="ColFour">
<img src={IconD} alt="Icon D"/><br/>
We're a Woman Owned Business 
</div>
</ColThreeContainer>
</div>
<ColThreeContainer>
<div className="ColTwo one-third boston-cl">
<img src={BostonIMG} alt="Boston"/>
<p className="txt">
<b>RECENT PARTNERS</b><br/>
<img src={PartnerIMG} alt="Partners"/>
</p>
</div>
<div className="ColTwo two-thirds boston-s">
<h2>Bespoke Partnerships</h2>
<p>We co-create one of a kind experiences with the most community driven, progressive partners in the world and design transformative experiences together.</p>
<p>We don't simply produce events or deliver impressions, we shift perspectives and push the boundaries for what's possible.</p>
<p>We can partner through bespoke Daybreaker experiences in the morning or we can create a completely new experience or series together in one city or across the world.</p>
<p>Our community of 500K + seasoned team of 35+ Producers and Community Catalysts around the world are ready to make magic and mischief.</p>
<p className="BigButton"><br/><a href="#" className="bg-cs">LET'S GO</a></p>
</div>
</ColThreeContainer>
<div className="wrapping home center">
<h1>Bespoke Case Studies</h1>
<ColThreeContainer>
<div className="ColThree cs-study">
<img src={IBMIMG} alt="IBM"/>
<h3>The World's First Cognitive Dance Party </h3>
Merging artificial intelligence and a human dance party.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#"><i className="fa fa-play-circle"></i> Watch Video</a>
<a className="bg-cs rm-sec" href="#">Get Case Study</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={SamsungIMG} alt="Samsung"/>
<h3>Using Wearable Technology to Enhance Dance</h3>
The collective energy on the dance floor measured by Gear Fit 2 unlocked surprises.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#"><i className="fa fa-play-circle"></i> Watch Video</a>
<a className="bg-cs rm-sec" href="#">Get Case Study</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={MacysIMG} alt="Macys"/>
<h3>First ever full Department Store takeover</h3>
9 story Daybreaker take over of Macy's flagship department store in New York City.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#"><i className="fa fa-play-circle"></i> Watch Video</a>
<a className="bg-cs rm-sec" href="#">Get Case Study</a>
</p>
</div>
</ColThreeContainer>
</div>
<ColThreeContainer>
<div className="ColTwo two-thirds boston-s nesp">
<h2>National Experiential Sampling Program</h2>
<p>NESP is Daybreaker's first-of-its-kind experiential sampling program where we offer a curated group of premium F&B partners the opportunity to sample at all of our US & Global events (8-14 events per month in the US).</p>
<p>The grocery store tasting stations are over saturated and no longer a quality spend for food and beverage brands.</p>
<h2>Why Daybreaker?</h2>
<div className="split-wrap">
<ul className="split">
<li>Worldwide Presence</li>
<li>Monthly Cadence</li>
</ul>
<ul className="split">
<li>Morning Events</li>
<li>Turnkey Execution</li>
</ul>
</div>
<h2>What we offer:</h2>
<div className="split-wrap">
<ul className="split">
<li>Avg. 350+ attendees/event</li>
<li>Brand Ambassadors</li>
<li>Giveaways</li>
<li>Digital footprint of 1mm+ across email and social</li>
</ul>
<ul className="split">
<li>Sampling at 10+ events/month</li>
<li>On Site Branding</li>
<li>Backend Tracking</li>
<li>Storage Between Events</li>
<li>Commercial Grade Photos</li>
</ul>
</div>
<h2>Facts & Figures:</h2>
<ul>
<li>Daybreaker puts on 10+ events per month with an average of 5,000 attendees per month.</li>
<li>87% of people have purchased a product from a new brand after an event.</li>
<li>After partnering with us, Manitoba Harvest saw a 20% increase in sales in Daybreaker cities.</li>
</ul>
<p className="BigButton"><br/><a href="#" className="bg-cs">LET'S GO</a></p>
</div>
<div className="ColTwo one-third boston-cl">
<img src={NESPIMG} alt="Boston"/>
<p className="txt">
<b>Our 2019 National Partners</b><br/>
<img src={PartnerBIMG} alt="Partners"/>
<p className="crd-th">If you see your category taken up, please contact us to get on our waitlist. Every six to twelve months, we review and renew our category exclusive National Experiential Sampling Program.</p>
</p>
</div>
</ColThreeContainer>
<div className="wrapping home center">
<h1>NESP Case Studies</h1>
<ColThreeContainer>
<div className="ColThree cs-study">
<img src={KomIMG} alt="Kombucha"/>
<h3>Kombucha at Daybreaker</h3>
Kombucha at Daybreaker is the beer equivalent to nightlife.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Get Case Study</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={SeedIMG} alt="Seedlip"/>
<h3>World's first distilled non-alcoholic spirit</h3>
Seedlip's non-alc cocktails are a hit amongst the sober-curious community.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Get Case Study</a>
</p>
</div>
<div className="ColThree cs-study">
<img src={ManitobaIMG} alt="Manitoba"/>
<h3>Hemp Heart Seeds</h3>
Manitoba's first experiential campaign to get a younger active audience fueled with a protein-packed pairing.
<p className="mischief-cs">
<a className="bg-cs rm-sec" href="#">Get Case Study</a>
</p>
</div>
</ColThreeContainer>
</div>
<ColThreeContainer>
<div className="ColTwo one-third boston-cl">
<img src={CircIMG} alt="Circle"/>
<p className="txt">
<img src={FCIMG} alt="Fast Company"/>
<p className="crd-th"><em>"Daybreaker boosts creativity and productivity in the office."</em></p>
</p>
</div>
<div className="ColTwo two-thirds boston-s circles">
<h2>Daybreaker Corporate Wellness Program</h2>
<p>Companies spend an average of $742 per employee per year on wellness, according to a recent UnitedHealthcare survey. Employers and employees say these programs improve health, retention, absenteeism and overall happiness and team morale.</p>
<p>Daybreaker provides an exciting and affordable turnkey wellness and community program based on our movement philosophy to create a happier and healthier workforce. Let's bring your teams together to start their day with a 3-hour yoga and dance experience in landmark venues before heading to the office.</p>
<h2>Benefits</h2>
<div className="split-wrap">
<ul className="split">
<li>Employee tickets to signature Daybreaker Events</li>
<li>Recruit Talent through Daybreaker's 500k+ community</li>
<li>Custom community building workshops</li>
</ul>
<ul className="split">
<li>Access to a global community</li>
<li>Exclusive employee discounts to LIVEITUP</li>
<li>Opportunity to co-create employee experiences</li>
</ul>
</div>
<p className="BigButton"><br/><a href="#" className="bg-cs">LET'S GO</a></p>
</div>
</ColThreeContainer>
<div className="split-wrap assym">
<div className="split">
<img src={BCIMG} alt="Belong Center"/>
<p>Belong Center was founded in 2018 by Daybreaker Co-Founder/CEO, Radha Agrawal, as a Community Architecture and Experience Design Consultancy & Lab to support progressive and purpose driven organizations passionate about scaling their movement and building meaningful and lasting communities. We are taking on three clients for 2019.</p>
<p className="BigButton"><br/><a href="#" className="bg-cs">FIND OUT MORE</a></p>
</div>
<div className="split labs-sec">
<img src={LabsIMG} alt="Labs"/>
<p>With a team of 35+ Producers and Community Catalysts across the globe, we design unforgettable moments that push the collective boundaries of the human experience. We team up with progressive and thoughful partners to co-create private events and special projects. If it moves humanity, we want in.</p>
<p className="BigButton"><br/><a href="#" className="bg-cs">FIND OUT MORE</a></p>
</div>
</div>
<ColThreeContainer>
<div className="sp-bg split-wrap">
<div className="split cln">
<h2>Join our Global Community in 25+ cities around the world and let's make magic!</h2>
<p className="BigButton"><br/><a href="#" className="bg-cs">FIND OUT MORE</a></p>
</div>
<div className="split cln">
</div>
</div>
</ColThreeContainer>
<ColThreeContainer>
<div className="ColThree partners col-a">
<div className="img-frame">
<p>SAN FRANCISCO</p>
</div>
</div>
<div className="ColThree partners col-b">
<div className="img-frame">
<p>BOULDER</p>
</div>
</div>
<div className="ColThree partners col-c">
<div className="img-frame">
<p>NEW YORK</p>
</div>
</div>
</ColThreeContainer>
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

export default PartnersPage
