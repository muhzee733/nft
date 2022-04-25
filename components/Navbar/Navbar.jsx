import React from 'react';
import Social1 from '../../image/social-icon1.png';
import Social2 from '../../image/social-icon2.png';
import Social3 from '../../image/social-icon3.png';
import Social4 from '../../image/social-icon4.png';
import Social5 from '../../image/social-icon5.png';
import '../../App.css';

const Navbar = () => {
  return (
    <>
<div className="w-100 float-left header-banner-con position-relative">
    <div className="header-banner-inner-con position-relative">
        <div className="wrapper">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active pl-0">
                            <a className="nav-link p-0 text-white hyper-solid-font" href="#">ROADMAP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-0 text-white hyper-solid-font" href="#">TEAM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-0 text-white hyper-solid-font" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-0 text-white hyper-solid-font" href="#">FAQs</a>
                        </li>
                    </ul>
                    <div className="social-icon d-inline-block">
                        <ul className="list-unstyled mb-0">
                            <li className="d-inline-block"><a href="#"><img src={Social1} /></a></li>
                            <li className="d-inline-block"><a href="#"><img src={Social2} /></a></li>
                            <li className="d-inline-block"><a href="#"><img src={Social3} /></a></li>
                            <li className="d-inline-block"><a href="#"> <img src={Social4} /></a> </li>
                            <li className="d-inline-block"><a href="#"> <img src={Social5} /></a> </li>
                        </ul>
                    </div>
                    <div className="contact-btn">
                        <a href="#">CONNECT WALLET</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
</>
  )
}

export default Navbar