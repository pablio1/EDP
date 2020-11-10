import React from 'react';
import {Link} from 'react-router-dom'

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
            <Link to="/secured/Student" className="logo mr-auto" style={{fontSize: '15px'}}><img src={require("assets/img/uc.png")} height="50" alt="" className="img-fluid" /> University of Cebu</Link>
            <nav className="main-nav d-none d-lg-block">
                <ul>
                    <li className="active"><Link to="/secured/Student">Home</Link></li>
                    <li className="drop-down mr-5"><a href={'/#'}>Student</a>
                        <ul>
                            <li className="drop-down"><a href={'/#'}>Student Infomation</a>
                                <ul>
                                    <li><Link to="/secured/Student/StudentGrades" >Grades</Link></li>
                                    <li><Link to="">Study Load</Link></li>
                                </ul>
                            </li>
                            <li><Link to="">Account Settings</Link></li>
                            <li className="drop-down"><a href={'/#'}>Survey</a>
                                <ul>
                                <li><Link to="/secured/student/TeacherEvaluation">Teachers Evaluation</Link></li>
                                <li><Link to="">Student Satisfaction Survey</Link></li>
                                <li><Link to="">Open Distance Learning Survey</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/secured/Student/OnlineEnrollment">Online Enrollment</Link></li>
                        </ul>
                    </li>
                    <li className="drop-down mr-1"><a href={'/#'} style={{display: 'flex'}}><label className="d-md-none d-lg-none d-xl-none d-sm-block mr-2">Notifications</label><i className="fa fa-bell text-danger">10</i></a>
                        <ul>
                            <li><a href="/#">Your enrollment has been approved.</a></li>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-center" href={'/#'}>View all notifications.</a>
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