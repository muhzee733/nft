import React, { useContext } from "react";
import '../../App.css';
import Discord from '../../image/discord-icon.png';

const Portfolio = () => {
  return (
    <section className="banner-con text-center position-relative wrapper">
                <div className="banner-title">
                  <h1>ABOUTTRIPPYCHICKSNFT</h1>
                </div>
                <p className=" col-lg-10 pl-0 pr-0 ml-auto mr-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                <div className="discord-tag  position-relative">
                    <div className="discord-inner-tag position-absolute">
                        <figure className="mb-0 d-inline-block">
                            <img src={Discord} alt="discord-icon" className="img-fluid" />
                        </figure>
                        <h4 className="mb-0 hyper-solid-font d-inline-block">DISCORD</h4>
                    </div>
                </div>
    </section>
  );
};

export default Portfolio;
