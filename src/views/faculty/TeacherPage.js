import React,{Component} from 'react';
import Topbar from 'components/Topbar';
import StudentNavbar from 'components/StudentNavbar';
import 'assets/css/style.css';
import Assessment from 'components/Assessment';
import Footer from 'components/Footer';
import TeacherNavbar from 'components/TeacherNavbar';

export class TeacherPage extends Component {


    



    render(){

        
        return (
            <>
            <TeacherNavbar />

            <main id="main">
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">
                        <ol>
                        <li><a href="index.html">Home</a></li>
                        </ol>
                        <h2>Online Faculty Portal</h2>
                    </div>
                </section>
                <section id="portfolio-details" class="portfolio-details">
                    <div class="container" data-aos="fade-up">
                        <div className="row justify-content-center">
                        <div className="col-md-4">
                                <div className="card-header">
                                    <h4 className="card-title">Teacher Information</h4>
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
                            <div className="col-md-8">
                                <div className="card-header">
                                    <h4 className="card-title">Assessment Information</h4>
                                </div>
                                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h5 class="mb-0" >
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1st Sem S.Y. 2020-2021 
                            </button>
                        </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            
                        <div class="table-responsive-sm">
                        <table class="table table-bordered table-sm">
                            <thead  class="thead-dark">
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
                                <th scope="row"><a href="#"><img src={require("assets/img/excel.png")} width="15"/>112354</a></th>
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
                                <th scope="row"><a href="#"><img src={require("assets/img/excel.png")} width="15"/>112354</a></th>
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
                                <th scope="row"><a href="#"><img src={require("assets/img/excel.png")} width="15"/>112354</a></th>
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
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2st Sem S.Y. 2020-2021
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
