import React from 'react';
import { Link } from 'react-router-dom';

function Hero (){
    return(
        <>
        <section className="hero-banner">
                <div className="container">
                <div className="row no-gutters align-items-center pt-60px">
                    <div className="col-5 d-none d-sm-block">
                    <div className="hero-banner__img">
                        <img className="img-fluid" src="img/home/hero-banner.jpg" alt="" />
                    </div>
                    </div>
                    <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
                    <div className="hero-banner__content">
                        <h4>Shop is fun</h4>
                        <h1>Garden & Planter</h1>
                        <p>Serving as a distribution center Cactus air purification plants, 
                            services for gardening design, maintenance and delivery nationwide 
                            And exported to foreign countries In addition, the shop has also improved 
                            the online tree ordering system to make customers more comfortable.</p>
                        <a className="button button-hero" href="#"><Link to="/login">GET STARTED</Link></a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default Hero;