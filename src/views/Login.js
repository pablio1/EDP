import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/style.css';
function Login(){
    return(
        <>
            <Topbar />
            <Header />
            
            <section id="hero" className="clearfix" >
                <div className="container d-flex h-100">
                <div className="row justify-content-center align-self-center" data-aos="fade-up">
                    <div className="col-md-6 intro-info order-md-first order-last" data-aos="zoom-in" data-aos-delay="180">

                        <form className="form-signin ml-5">
                        <div class="form-label-group">
                        <h3 class="title">Login to your Account</h3>
                               <hr></hr>
                            </div>
                            <div class="form-label-group">
                                <input type="email" placeholder="Username"  style={{paddingLeft: '20px'}} className="form-control input-padding"  required autofocus />
                            </div>

                            <div class="form-label-group">
                                <input type="password" placeholder="Password" style={{paddingLeft: '20px'}} className="form-control"  required />
                            </div>

                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label>Forgot password?</label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                            
                            
                        </form>

                    
                    </div>

                    <div className="col-md-6 intro-img order-md-last order-first" data-aos="zoom-in" data-aos-delay="200">
                        <img src="assets/img/intro-img.png" alt="" className="img-fluid" class="img-fluid animated"/>
                    </div>
                </div>

                </div>
            </section>
            

            <section id="services" class="services section-bg">
                <div class="container mt-5 mb-5" data-aos="fade-up">

                    <header class="section-header">
                    <h3>Online Registration</h3>
                    <p className="text-info">Student can only register once, please contact <b className="text-danger">egrade.uclm@gmail.com</b> with your full name and date of birth to recover your account
</p>
                    </header>

                    <div class="row">
                        <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
                            <div class=" box">
                                <div class="icon" style={{background: '#e1eeff'}}><i class="" style={{color: '#2282ff'}}><img src={require("../assets/img/college.png")} style={{height: '65px', width: '65px'}} /></i></div>
                                <h4 class="title"><a href="">College</a></h4>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                            <div class="box">
                                <div class="icon" style={{background: '#ecebff'}}><i class="" style={{color: '#8660fe'}}><img src={require("../assets/img/senior.png")} style={{height: '65px', width: '65px'}} /></i></div>
                                <h4 class="title"><a href="">Senior High</a></h4>
                                
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                            <div class="box">
                                <div class="icon" style={{background: '#ecebff'}}><i class="" style={{color: '#8660fe'}}><img src={require("../assets/img/junior.png")} style={{height: '65px', width: '65px'}} /></i></div>
                                <h4 class="title"><a href="">Junior High</a></h4>
                                
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                            <div class="box">
                                <div class="icon" style={{background: '#ecebff'}}><i class="i\" style={{color: '#8660fe'}}><img src={require("../assets/img/elementary.png")} style={{height: '65px', width: '65px'}} /></i></div>
                                <h4 class="title"><a href="">Elementary</a></h4>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id="about" class="contact section-bg"> 
            <div class="container">
            <div class="section-title">
          <h1>About</h1>
          <section id="aboutus" class="team">
          <div class="container">
          <div class="section-title">
              
          <h2 className="text-info" ><b>University of Cebu commits itself to:</b></h2>
          <p>Serve as an active catalyst in providing efficient delivery of educational services;</p><br></br>
          <p>
Pursue excellence in instruction, research and community services towards social and economic development as well as environmental sustainability;</p><br></br>
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

export default Login;