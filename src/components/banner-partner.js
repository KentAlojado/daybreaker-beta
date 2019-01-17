import React from "react";
import PopupAbout from "../components/popup-about";
const BannerPartner = () => (
  <div className="bg-grey-dark banner-sec">
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://www.daybreaker.com/wp-content/themes/dybrkr/video/dybrkr.mp4" type="video/mp4"/>
  </video>
    <div class="container h-100">
    <div class="d-flex text-center h-100">
      <div class="my-auto w-100 text-white">
<PopupAbout />
      </div>
    </div>
  </div>
  </div>
);
export default BannerPartner;
