import React,{Component} from 'react';
import StudentNavbar from 'components/StudentNavbar';
import 'assets/css/style.css';
import Assessment from 'components/Assessment';
import Footer from 'components/Footer';

export class Dashboard extends Component {


    



    render(){

        
        return (
            <>
            <StudentNavbar />

            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <ol>
                        <li><a href="index.html">Home</a></li>
                        </ol>
                        <h2>Online Student Portal</h2>
                    </div>
                </section>
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container" data-aos="fade-up">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card-header">
                                    <label className="card-title">Student Information</label>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <img src={require('assets/img/Pic1.jpg')} height="150" width="120" alt="" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12 text-center">
                                                <label>Publio S. Sumalinog Jr.</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <label>12554499</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <label>BSIT 3</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <label className="badge badge-info">Enrolled</label>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row mt-3">
                                            <div className="col-md-12 text-center">
                                                <label>+6390000001</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <label>facebook.com/profile?EDP</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <label>pub.sumalinog@gmail.com</label>
                                                <label className="badge badge-success">Verified</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card-header">
                                    <label className="card-title">Assessment Information</label>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="text-danger text-center">For inquiries, please call students accounting at 345 6666 local 6202/6203.</p>
                                            <Assessment />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
        )
    }
}

export default Dashboard
