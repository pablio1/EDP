import React,{Component} from 'react';
import StudentNavbar from 'components/StudentNavbar';
import 'assets/css/style.css';
import Assessment from 'components/Assessment';
import Footer from 'components/Footer';
import Dropzone from 'components/Dropzone';

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
                        <div className="mt-4 row justify-content-center">
                                <div className="col-md-11">
                                    <div className="card">
                                    <div className="card-body">
                                        <div className="container dropndragtitle">
                                            <div className="row">
                                                <div className="col-md-12 m-3 text-center">
                                                    <h2 className="text-white text-uppercase font-weight-bold">
                                                        FOR YOUR PAYMENT TRANSACTIONS
                                                    </h2>
                                                    <label className="text-white text-uppercase">
                                                        YOU MAY VISIT THE FOLLOWING BANKS AND REMITTANCE CENTERS
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <table className="table text-center border-0">
                                                    <tbody>
                                                        <tr>
                                                            <td><img alt="" height="50" width="80" src={require('assets/img/banks/metrobank.png')} /></td>
                                                            <td className="font-weight-bold">METROBANK</td>
                                                            <td>
                                                                UNIVERSITY OF CEBU LAPULAPU AND MANDAUE <br />
                                                                <small className="text-danger">Note: Use Bills Payment</small>
                                                            </td>
                                                            <td>094-3-01147805-0</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img alt="" height="50" width="80" src={require('assets/img/banks/commerce.png')} /></td>
                                                            <td className="font-weight-bold">BANK OF COMMERCE</td>
                                                            <td>
                                                                UNIVERSITY OF CEBU LAPULAPU AND MANDAUE
                                                            </td>
                                                            <td>34-000-016-103</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img alt="" height="50" width="80" src={require('assets/img/banks/unionbank.png')} /></td>
                                                            <td className="font-weight-bold">UNION BANK</td>
                                                            <td>
                                                            </td>
                                                            <td>0005-7001-2910</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img alt="" height="50" width="80" src={require('assets/img/banks/aspac_rural_bank.jpg')} /></td>
                                                            <td className="font-weight-bold">ASPAC BANK</td>
                                                            <td>
                                                                UNIVERSITY OF CEBU-UCLM
                                                            </td>
                                                            <td>01-0201-00011-4</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <label className="mt-2">Please upload files for: <b>PRELIM</b></label>
                                        <Dropzone />
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
