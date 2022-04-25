import React, { useContext } from "react";
import profilePic1 from "../../image/line-bar.png";
import '../../App.css';
import Faq  from "./faq";


const Toggle = () => {
  return (
    <section className="w-100 float-left roadmap-con position-relative">
    <div className="roadmap-inner-con position-relative">
        <div className="roadmap-img-con position-relative">
            <div className="roadmap-shedow position-relative">
                <div className="wrapper">
                    <div className="roadmap-title text-center">
                        <h2 className="text-black-outline position-relative">ROADMAP</h2>
                        <figure>
                            <img src={profilePic1} alt="line-bar" />
                        </figure>
                        <p className="col-lg-9 ml-auto mr-auto pl-0 pr-0">While the Roadmap is still a work in progress, we are happy to share our vision and goals that we have set for the project and future ahead. We never outright promise anything, this is all a live living list of our plans as we advance down the road together.</p>
                    </div>
                    <div className="roadmap-box-con">
                        <div>
                            <Faq />
                        </div>
                        <div className="roadmap-box float-right d-flex float-right">
                            <div className="roadmap-box-title float-left">
                                <h3>Pre-Sale</h3>
                                <p className="mb-0">[Number of] lucky members will gain access to exclusive passes before they hit the market. We will be picking these winners from our Discord community so make sure to tune in
                                </p>
                            </div>
                            <div className="roadmap-box-static float-right bg-1BADFF">
                                <div className="circle-wrap thirdPercentage position-relative">
                                    <div className="circle">
                                        <div className="mask full">
                                            <div className="fill"></div>
                                        </div>
                                        <div className="mask half">
                                            <div className="fill"></div>
                                        </div>
                                        <div className="inside-circle">
                                            <div className="skill-bar">
                                                <div className="skill-inner-bar text-center d-flex align-items-center justify-content-center">
                                                    <h4 className="mb-0 text-center count">20</h4>
                                                    <span className="text-white static-txt2">%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          
                        </div>
                        <Faq />
                        <div className="roadmap-box float-right d-flex float-right">
                            <div className="roadmap-box-title float-left">
                                <h3>Pre-Sale</h3>
                                <p className="mb-0">[Number of] lucky members will gain access to exclusive passes before they hit the market. We will be picking these winners from our Discord community so make sure to tune in
                                </p>
                            </div>
                            <div className="roadmap-box-static float-right bg-1BADFF">
                                <div className="circle-wrap thirdPercentage position-relative">
                                    <div className="circle">
                                        <div className="mask full">
                                            <div className="fill"></div>
                                        </div>
                                        <div className="mask half">
                                            <div className="fill"></div>
                                        </div>
                                        <div className="inside-circle">
                                            <div className="skill-bar">
                                                <div className="skill-inner-bar text-center d-flex align-items-center justify-content-center">
                                                    <h4 className="mb-0 text-center count">20</h4>
                                                    <span className="text-white static-txt2">%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                            <Faq />
                    </div>
                  
                </div>
               
            </div>
            
        </div>
   
    </div>
   
</section>
  );
};

export default Toggle;
