import React from "react";
import PopupAbout from "../components/popup-about";
const BannerAbout = () => (
  <div className="bg-grey-dark banner-sec">
  <div class="overlay ovr-about"></div>
    <div class="container h-100">
    <div class="d-flex text-center h-100 about-bg">
      <div class="my-auto w-100 text-white">
        <h1 class="banner-heading"><span className="streetthis">We are</span><br/>DAYBREAKER</h1>
		<p className="sub-txt">A community. A lifestyle. A movement.</p>
<PopupAbout />
      </div>
    </div>
  </div>
  </div>
);
export default BannerAbout;