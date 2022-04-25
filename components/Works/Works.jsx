import React, { useContext } from "react";
import Image from '../../image/small-discord-icon.png';



const Works = () => {
  return (
    <section className="w-100 float-left join-con">
    <div className="container">
        <div className="join-inner-con position-relative">
            <div className="join-title">
              <h2>JOIN OUR COMMUNITY</h2>
            </div>
            <p>OAt present, the Trippy Chicks are only 2D, but with the expansion of the Metaverse and increasing functionality of NFTs and the Blockchain, we want to develop the Trippy Chicks for 3D animation.</p>
            <div className="join-btn">
                <a href="#"><figure className="mb-0 d-inline-block"><img src={Image} alt="discord-icon" className="classNameName-fluid" /></figure>Join Discord</a>
            </div>
        </div>
    </div>
</section>
  );
};

export default Works;
