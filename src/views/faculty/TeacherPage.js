import React,{Component} from 'react';
import 'assets/css/style.css';
import Footer from 'components/Footer';
import TeacherNavbar from 'components/TeacherNavbar';

export class TeacherPage extends Component {


    



    render(){
        return (
            <>
            <TeacherNavbar />
            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <ol>
                        <li><a href="index.html">Home</a></li>
                        </ol>
                        <h2>Online Faculty Portal</h2>
                    </div>
                </section>
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container" data-aos="fade-up">
                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="card-header">
                                    <label className="card-title">Teacher Information</label>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <img src={require('assets/img/Pic1.jpg')} height="150" width="150" className="profile-circle" alt="" />
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
                            <div className="col-md-9">
                                <div className="card-header">
                                    <label className="card-title">Schedules</label>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="table-responsive-sm">
                                            <div className="accordion" id="accordionExample">
                                                <div className="card">
                                                    <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <label>1st Sem S.Y 2020-2021</label>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="table-responsive-sm">
                                                                <table className="table table-bordered table-sm">
                                                                    <thead  className="thead-dark">
                                                                        <tr>
                                                                        <th >EDP Code</th>
                                                                        <th >Department</th>
                                                                        <th>Section</th>
                                                                        <th>Subject</th>
                                                                        <th>Units</th>
                                                                        <th>Time</th>
                                                                        <th>Days</th>
                                                                        <th>Room</th>
                                                                        <th>Class Size</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row"><a href={'/#'}><img src={require("assets/img/excel.png")} alt="" width="15"/>112354</a></th>
                                                                            <td>BSIT</td>
                                                                            <td>4OA</td>
                                                                            <td>ITELEC 42</td>
                                                                            <td>2</td>
                                                                            <td>1:30-3:30 PM</td>
                                                                            <td>SAT</td>
                                                                            <td>212</td>
                                                                            <td>29</td>
                                                                        </tr> 
                                                                        <tr>
                                                                            <th scope="row"><a href={'/#'}><img src={require("assets/img/excel.png")} alt="" width="15"/>112354</a></th>
                                                                            <td>BSIT</td>
                                                                            <td>4OA</td>
                                                                            <td>IT-ELEC 1</td>
                                                                            <td>2</td>
                                                                            <td>1:30-3:30 PM</td>
                                                                            <td>SAT</td>
                                                                            <td>212</td>
                                                                            <td>29</td>
                                                                        </tr> 
                                                                        <tr>
                                                                            <th scope="row"><a href={'/#'}><img src={require("assets/img/excel.png")} alt="" width="15"/>112354</a></th>
                                                                            <td>BSIT</td>
                                                                            <td>4OA</td>
                                                                            <td>IT-ELEC 1-L</td>
                                                                            <td>2</td>
                                                                            <td>1:30-3:30 PM</td>
                                                                            <td>SAT</td>
                                                                            <td>212</td>
                                                                            <td>29</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default TeacherPage
