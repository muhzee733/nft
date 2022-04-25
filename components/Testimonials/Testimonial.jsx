import React from "react";
import profilePic1 from "../../image/families-img1.png";
import profilePic2 from "../../image/families-img2.png";
import profilePic3 from "../../image/families-img3.png";
import profilePic4 from "../../image/families-img4.png";
import profilePic5 from "../../image/families-img5.png";
import '../../App.css';
const Testimonial = () => {
return(
  <section className="w-100 float-left families-con text-center position-relative">
    <div className="families-inner-con position-relative">
        <div className="box-sahdow position-relative">
            <div className="container-1556">
                <div className="families-title">
                  <h2>THE FIVE FAMILIES</h2>
                </div>
                <div className="families-box-con">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="families-box-item">
                                <figure>
                                    <img src={profilePic1} alt="families-img" className="img-fluid" />
                                </figure>
                                <h4>Happister</h4>
                                <p className="mb-0">Anyone who possesses the Happister chick in the metaverse is bound to gain a limitless supply of happiness in the metaverse. They will be granted the boon of staying positive and happy and go on to spread that positivity among loved ones, friends, and the rest of the community.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="families-box-item">
                                <figure>
                                    <img src={profilePic2} alt="families-img" className="img-fluid" />
                                </figure>
                                <h4>Healthrix</h4>
                                <p className="mb-0">: The possessor of Healthrix will benefit from a healthy and youthful lifestyle. Health can be improved by a balanced intake of diet and maintaining your body by partaking in exercise and physical activity together with the other community members.
                                </p>
                
                            </div>
                        </div>
                        <div className="   col-lg-4">
                            <div className="families-box-item">
                                <figure>
                                    <img src={profilePic3} alt="families-img" className="img-fluid" />
                                </figure>
                                <h4>Wealthrix</h4>
                                <p className="mb-0">Wealthrix is responsible for bringing wealth to your life. Anyone who possesses wealthrix will be granted substantial wealth. You can further increase your wealth by discussing different ideas regarding business and financial matters with your peers in the metaverse community.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row mb-0 justify-content-center">
                        <div className="col-lg-4">
                            <div className="families-box-item">
                                <figure>
                                    <img src={profilePic4} alt="families-img" className="img-fluid" />
                                </figure>
                                <h4>Peacer</h4>
                                <p className="mb-0">The Peacer trippy chick NFT will bring peace to your life. Even after owning whatever you want you can still not achieve inner peace. You can achieve this inner peace by the Peacer trippy chich and by discussing different ways of the spiritual nature with your fellow metaverse community members.</p>
                               
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="families-box-item">
                                <figure>
                                    <img src={profilePic5} alt="families-img" className="img-fluid" />
                                </figure>
                                <h4>Prosperin</h4>
                                <p className="mb-0">The bearer of the Prosperin trippry chick NFT will be able to lead a successful life as the chick is responsible for bringing prosperity to one’s life. When you have all the above virtues, happiness, wealth, peace, and health, then you will have achieved prosperity and lead a successful life in the metaverse along with your community of friends.</p>
                              
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
   
</section>
  );
};

export default Testimonial;
