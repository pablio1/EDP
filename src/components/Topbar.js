import React from 'react';

function Topbar(){
    return(
        <div id="topbar" className="d-none d-lg-flex align-items-end fixed-top topbar-transparent">
            <div className="container d-flex justify-content-end">
                <div className="social-links">
                    <a href={'#twitter'} className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href={'#facebook'} className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href={'#linkedin'} className="linkedin"><i className="fa fa-linkedin"></i></a>
                    <a href={'#instagram'} className="instagram"><i className="fa fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Topbar;