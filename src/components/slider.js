import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import SlideA from "../images/slide-a.png";
import SlideB from "../images/slide-b.png";
import SlideC from "../images/slide-c.png";
import SlideD from "../images/slide-d.jpg";
import SlideE from "../images/slide-e.png";
import SlideF from "../images/slide-f.png";
import SlideG from "../images/slide-g.jpg";
export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="SlideSec">
          <img src={SlideA} alt="Slide A" />
        </div>
        <div className="SlideSec">
          <img src={SlideB} alt="Slide B" />
        </div>
        <div className="SlideSec">
          <img src={SlideC} alt="Slide C" />
        </div>
        <div className="SlideSec">
          <img src={SlideD} alt="Slide D" />
        </div>
        <div className="SlideSec">
          <img src={SlideE} alt="Slide E" />
        </div>
        <div className="SlideSec">
          <img src={SlideF} alt="Slide F" />
        </div>
        <div className="SlideSec">
          <img src={SlideG} alt="Slide G" />
        </div>
      </Slider>
    );
  }
}