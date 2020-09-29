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
                    <div className="container mt-5 mb-5" data-aos="fade-up">

                        <header className="section-header">
                        <h3>Online Registration</h3>
                        <p className="text-info">Student can only register once, please contact <b className="text-danger">egrade.uclm@gmail.com</b> with your full name and date of birth to recover your account
    </p>
                        </header>
                        <GradeLevel />
                        

                    </div>
                </section>

                <section id="about" className="contact section-bg"> 
                    <div className="container">
                        <div className="section-title">
                            <header className="section-header">
                                <h3>About</h3>
                            </header>
                            <section id="aboutus" className="team">
                                <div className="container">
                                    <div className="section-title">
                                        <h2 className="text-info" ><b>University of Cebu commits itself to:</b></h2>
                                        <p>Serve as an active catalyst in providing efficient delivery of educational services;</p><br></br>
                                        <p>Pursue excellence in instruction, research and community services towards social and economic development as well as environmental sustainability;</p><br></br>
                                        <p>Acquire, disseminate and utilize appropriate technology to enhance the university’s educational services; and</p><br></br>
                                        <p>Foster an organizational culture that nurtures employee productivity and engagement.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>    

                <Footer/>
            </>
            
        )
    }
}

export default Login;