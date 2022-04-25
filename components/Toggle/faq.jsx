import React from "react";
import '../../App.css';

const Faq = () =>{
    return(
        <div className="roadmap-box float-left d-flex">
                            <div className="roadmap-box-static float-left bg-FFC21B">
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
                                                    <h4 className="mb-0 text-center count">10</h4>
                                                    <span className="text-white static-txt2">%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-box-title ">
                                <h3>Discord Server</h3>
                                <p className="mb-0">Come celebrate the debut of Trippy Chick with us! You’ll learn all about the Trippy Chick sets and much more. Join the community to get the latest updates and see what all the hype is about.
                                    Trippy Chicks mints on [date] at [day] for [price] ETH each. Be sure to save the date. You don’t wanna miss out!
                                </p>
                            </div>
                            
                        </div>
    )
}

export default Faq