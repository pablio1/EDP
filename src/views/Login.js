import React, {Component} from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/style.css';
import GradeLevel from './registration/GradeLevel';


export class Login extends Component{
    

    

    render(){
        return(
            <>
                <Topbar />
                <Header />
                
                <section id="hero" className="clearfix" >
                    <div className="container d-flex">
                        
                        <div className="row justify-content-center align-self-center" data-aos="fade-up">
                        
                            <div className="col-md-6 intro-info order-md-first order-last" data-aos="zoom-in" data-aos-delay="180">
                                <form className="form-signin ml-5">
                                    <div className="form-label-group">
                                        <h3 className="title">Login to your Account</h3>
                                    <hr></hr>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="email" placeholder="Username" alt=""  style={{paddingLeft: '20px'}} className="form-control input-padding"  required autoFocus />
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" placeholder="Password" alt="" style={{paddingLeft: '20px'}} className="form-control"  required />
                                    </div>

                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label>Forgot password?</label>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                </form>
                            </div>

                            <div className="col-md-6 intro-img order-md-last order-first" data-aos="zoom-in" data-aos-delay="200">
                                <img src="assets/img/intro-img.png" alt="elementary" className="img-fluid" className="img-fluid animated"/>
                            </div>
                        </div>

                    </div>
                </section>
                

                <section id="services" className="services section-bg">
                    <div className="container-lg" data-aos="fade-up">

                        <header className="section-header">
                        <h3>Online Registration</h3>
                        <p className="text-info">Student can only register once, please contact <b className="text-danger">egrade.uclm@gmail.com</b> with your full name and date of birth to recover your account
    </p>
                        </header>
                        <GradeLevel />
                        

                    </div>
                </section>

                <section id="about" className="clearfix"> 
                    <div className="container">
                        <div className="section-title">
                            <header className="section-header">
                                <h3>About</h3>
                            </header>
                            
                           
                            <div className="card text-center">
                            <div className="card-header">
                           
                            <h5 className="text-info"><strong>University of Cebu commits itself to:</strong></h5>
                            </div>
                            <div className="card-body ">
                            <br></br>
                                <p className="card-text">Serve as an active catalyst in providing efficient delivery of educational services;</p><br></br>
                                <p className="card-text">Pursue excellence in instruction, research and community services towards social and economic development as well as environmental sustainability;</p><br></br>
                                <p className="card-text">Acquire, disseminate and utilize appropriate technology to enhance the university’s educational services; and</p><br></br>
                                <p className="card-text">Foster an organizational culture that nurtures employee productivity and engagement.</p>
                                
                            </div>
                            <div className="card-header">
                           
                            <h5 className="text-info"><strong>Institutional Goals</strong></h5>
                            </div>
                            <div className="card-body">
                                
                                <p className="pull-left">1. To offer programs to include Alternative Learning Systems (ALS) that are relevant, holistic and complaint with institutional, </p>
                                <p className="pull-left">&nbsp;&nbsp;&nbsp;&nbsp;regulatory, industry and accreditation standards that will develop life-long learners.</p>
                                
                                <p className="pull-left">2. To develop among stakeholders social awareness, responsibility and accountability anchored on institution, research and production.</p>
                                <p className="pull-left">3. To complement the academic programs with holistic and integrated student personnel services.</p>
                                <p className="pull-left">4. To develop a pool of qualified, professional and motivated faculty in the areas of instruction, research and community extension.</p>
                                <p className="pull-left">5. To ensure effective administration and supervision of instructional and learning resources in support of the academic programs.</p>
                                <p className="pull-left">6. To provide an environment that is safe, functional and conducive to teaching, learning and working.</p>
                                <p className="pull-left">7. To ensure operations which are collaborative, sustainable, efficient and effective in meeting the needs of the institution and its stakeholders.</p>
                                
                                
                                
                            </div>
                            <div className="card-header">
                           
                            <h5 className="text-info"><strong>Core Values</strong></h5>
                            </div>
                            <div className="card-body">
                                
                                <p className="card-text">These are the core values that the University of Cebu upholds: </p><br></br>
                                <h6><strong>Innovation</strong></h6>
                                <p className="card-text">Be the visionary and the industry leader.</p><br></br>
                                <h6><strong>Camaraderie</strong></h6>
                                <p className="card-text">Living in the spirit of harmony and approachability.</p><br></br>
                                <h6><strong>Alignment</strong></h6>
                                <p className="card-text">All activities are geared towards core values and priorities.</p><br></br>
                                <h6><strong>Respect</strong></h6>
                                <p className="card-text">Always a professional, mindful of God, university, the community and self.</p><br></br>
                                <h6><strong>Excellence</strong></h6>
                                <p className="card-text">To be great at whatever it is we do and go for the best.</p>
                               
                                
                                
                                
                                
                            </div>
                            </div>
                           
                        </div>
                    </div>
                </section>    

                <Footer/>
            </>
            
        )
    }
}

export default Login;