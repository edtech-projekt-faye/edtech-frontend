import React, { Component } from "react";
import Slider from "react-slick";
import FindCourse from "../pages/FindCourse";
import LearnAnytime from "../pages/LearnAnytime";
import ImproveSkills from "../pages/ImproveSkills";


export default class PreviousNextMethods extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        console.log(props)
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();

    }

    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1}>
                        <LearnAnytime />
                    </div>
                    <div key={2}>
                        <FindCourse />
                    </div>
                    <div key={3}>
                        <ImproveSkills />
                    </div>

                </Slider>
                <div >
                    <button className="button" onClick={this.previous}>
                        Previous
          </button>
                    <button className="button" onClick={this.next}>
                        Next
          </button>
                </div>
            </div>
        );
    }
}