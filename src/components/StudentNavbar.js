import React from 'react';

function StudentNavbar(){
    return(
        <>
        <div id="topbar" className="d-none d-lg-flex align-items-end fixed-top ">
            <div className="container d-flex justify-content-end">
            <div className="social-links">
                <a href="/#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="/#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="/#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="/#" className="instagram"><i className="fa fa-instagram"></i></a>
            </div>
            </div>
        </div>
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">
            <a href={'/'} className="logo mr-auto" style={{fontSize: '15px'}}><img src={require("assets/img/uc.png")} height="50" alt="" className="img-fluid" /> University of Cebu</a>
            <nav className="main-nav d-none d-lg-block">
                <ul>
                    <li className="active"><a href={'/#'}>Home</a></li>
                    <li className="drop-down mr-5"><a href={'/#'}>Student</a>
                        <ul>
                            <li><a href={'/#'}>Account Settings</a></li>
                            <li className="drop-down"><a href={'/#'}>Survey</a>
                                <ul>
                                <li><a href={'/#'}>Teachers Evaluation</a></li>
                                <li><a href={'/#'}>Student Satisfaction Survey</a></li>
                                <li><a href={'/#'}>Open Distance Learning Survey</a></li>
                                </ul>
                            </li>
                            <li><a href={'/#'}>Online Enrollment</a></li>
                        </ul>
                    </li>
                    <li className="drop-down mr-1"><a href={'/#'} style={{display: 'flex'}}><label className="d-md-none d-lg-none d-xl-none d-sm-block mr-2">Notifications</label><i className="fa fa-bell text-danger">10</i></a>
                        <ul>
                            <li><a href={'/#'}>Your enrollment has been approved.</a></li>
                        </ul>
                    </li>
                    <li className=""><a href={'/#'}>Publio S. Sumalinog Jr.</a></li>
                </ul>
            </nav>
            </div>
        </header>
        </>
    )
}

export default StudentNavbar;